"use client";
// image	Image Url or Data Url / Uri	null	any
// width	Original Width of Image	500	number
// height	Original Height of Image	500	number
// format	"jpeg", "gif", "png", "bmp", "svg", "ico"	"png"	string
// scale	Amount of scale, for example if I want image to be 50 % of it's size then I will use 0.5	1	number


interface ImageConverterOptions {
  width?: number;
  height?: number;
  format?: 'png' | 'jpeg' | 'webp' | 'gif' | 'bmp' | 'svg' | 'ico';
  scale?: number;
  quality?: number;
}

export const imgConverter = (
  dataUrl: string,
  options: ImageConverterOptions = {}
): Promise<string> => {
  const {
    width = 500,
    height = 500,
    format = 'png',
    scale = 1,
    quality = 0.92
  } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = dataUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject(new Error('Failed to get canvas context'));
        return;
      }

      const aspectRatio = img.width / img.height;
      let drawWidth = width * scale;
      let drawHeight = height * scale;

      if (width / height > aspectRatio) {
        drawWidth = drawHeight * aspectRatio;
      } else {
        drawHeight = drawWidth / aspectRatio;
      }

      canvas.width = width * scale;
      canvas.height = height * scale;

      // Use a higher quality smoothing algorithm
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Center the image
      const offsetX = (canvas.width - drawWidth) / 2;
      const offsetY = (canvas.height - drawHeight) / 2;

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Convert to the desired format with specified quality
      const resultDataUrl = canvas.toDataURL(`image/${format}`, quality);
      resolve(resultDataUrl);
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
  });
};
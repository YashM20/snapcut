"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable';


type Props = {
  img: string | null
}

const Viewer = ({ img }: Props) => {
  const [imgH, setImgH] = useState(0);
  const [imgW, setImgW] = useState(0);

  useEffect(() => {
    // if (document) {
    setImgH(document?.getElementById("parent-img")?.offsetHeight || 0);
    setImgW(document?.getElementById("parent-img")?.offsetWidth || 0);
    // }
  });

  return (
    <div className="h-[80vh] min-w-full w-full flex justify-center items-center overflow-auto ">
      <div className="rounded-md overflow-hidden">
        <div id="my-node" className="relative max-w-[80vw] sm:h-96 p-6 flex justify-center items-center bg-slate-300/10 ">
          <Draggable>
            <Image
              height={200}
              width={200}
              id="parent-imgw"
              src={img || require("@/public/assets/images/placeholder.svg")}
              alt="Editable image"
              draggable={false}
              className={
                img
                  ? `max-w-full sm:max-h-full max-h-96 rounded-md aspect-[${imgW / imgH
                  }] cursor-move`
                  : `max-w-full sm:max-h-full max-h-96 rounded-md aspect-[${imgW / imgH
                  }] cursor-move`
              }
            />
          </Draggable>
        </div>
      </div>
    </div>
  )
}

export default Viewer
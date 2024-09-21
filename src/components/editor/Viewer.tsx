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
  }, [img]);

  return (
    <div className='h-[70vh] sm:h-[80vh] flex justify-center items-center'>
      <div className=" min-w-full w-full flex justify-center my-auto items-center overflow-auto select-none ">
        <div className="rounded-md overflow-hidden ">
          <div id="my-node" className="relative max-w-[80vw] sm:h-96 p-6 flex justify-center items-center bg-transparent ">
            <Draggable>

              <Image
                height={200}
                width={200}
                id="parent-img"
                src={img || require("@/public/assets/images/placeholder.svg")}
                alt="Editable image"
                draggable={false}
                className={
                  img
                    ? `max-w-full sm:max-h-full max-h-96 rounded-md aspect-[${imgW / imgH
                    }] cursor-move`
                    : `max-w-full sm:max-h-full max-h-96 rounded-md aspect-[${imgW / imgH
                    }] cursor-move`
                    + " select-none"
                }
              />
            </Draggable>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Viewer
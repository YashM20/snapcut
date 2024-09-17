"use client";
import React, { useState } from 'react'
import Viewer from './Viewer';
import Toolbar from './Toolbar';
import EditorHeader from './EditorHeader';

type Props = {}

const Editor = (props: Props) => {
  const [img, setImg] = useState<string | null>(null);

  const onImageChange = (e) => {
    if (e.target.files.length !== 0) {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    }
  };

  return (
    <main className="min-h-full flex flex-col flex-1 bg-gradient-to-tr from-[#004d7a]/10 to-[#00bf72]/10 " style={{
      // backgroundImage: "linear-gradient(to right top, #051937, #004d7a, #008793 , #00bf72, #a8eb12)"
    }}>
      <EditorHeader />
      <Viewer img={img} />
      <Toolbar onImageChange={onImageChange} img={img} />
    </main>
  )
}

export default Editor
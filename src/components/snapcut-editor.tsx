'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Moon,
  Sun,
  Github,
  Upload,
  Wand2,
  Layers,
  Paintbrush,
  Maximize2,
  CornerUpLeft,
  Square,
  Cloud,
  Share2,
  Download
} from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

export function SnapcutEditor() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const handleImageSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }, [])

  if (!mounted) return null

  return (
    <div className={`min-h-screen transition-colors duration-300 ${!darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <header className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-200 text-transparent bg-clip-text">
          SnapCut
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {!darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>
          <a
            href="https://github.com/YashM20/snapcut"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </header>

      <main className="flex-1 flex justify-center items-center p-8">
        <div
          className="w-full max-w-4xl aspect-video bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex justify-center items-center overflow-hidden transition-all duration-300 group"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="relative w-full h-full">
            {image ? (
              <Image
                priority
                height={600}
                width={800}
                // src="https://picsum.photos/800/600"
                src={image}
                alt="Editable image"
                className="w-full h-full object-contain"
                onDoubleClick={() => setImage(null)}
              />
            ) : (
              <label
                htmlFor="image"
                className="flex h-full flex-col items-center justify-center gap-4 p-8 bg-gray-100 dark:bg-gray-700/30 rounded-lg cursor-pointer transition-colors duration-300"
              >
                <Upload className="w-16 h-16 mb-4 text-gray-600 dark:text-gray-400 " />
                <span className="text-lg text-gray-600 dark:text-gray-400">
                  Drag & Drop or <span className="text-purple-600 dark:text-pink-600">Upload</span> an image
                </span>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageSelect}
                />
              </label>
            )}
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white dark:bg-gray-800/0 shadow-lg transition-colors duration-300">
        <div className="flex justify-center items-center py-4 gap-6 max-w-4xl mx-auto overflow-x-auto overflow-y-visible">
          {[
            { icon: Upload, label: 'Upload' },
            { icon: Wand2, label: 'Auto Enhance' },
            { icon: Layers, label: 'Filters' },
            { icon: Paintbrush, label: 'Adjust' },
            { icon: Maximize2, label: 'Crop' },
            { icon: CornerUpLeft, label: 'Effects' },
            { icon: Square, label: 'Frames' },
            { icon: Cloud, label: 'Background' },
            { icon: Share2, label: 'Share' },
            { icon: Download, label: 'Export' },
          ].map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center group"
              onClick={() => {
                console.log(item.label)
                toast.info(item.label)
              }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 ${getGradient(index)
                }`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs mt-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.label}</span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  )
}

function getGradient(index: number) {
  const gradients = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-teal-500',
    'from-green-500 to-lime-500',
    'from-yellow-500 to-orange-500',
    'from-red-500 to-pink-500',
    'from-indigo-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-teal-500 to-cyan-500',
    'from-orange-500 to-amber-500',
    'from-gray-500 to-slate-500',
  ]
  return gradients[index % gradients.length]
}
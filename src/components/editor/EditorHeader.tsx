"use client"
import {
  Github,
} from 'lucide-react'

const EditorHeader = () => {
  // const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <header className="flex justify-between items-center p-6 transition-colors duration-300">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500/80 to-emerald-200 text-transparent bg-clip-text">
        SnapCut
      </h1>
      <div className="flex items-center gap-4">
        {/* <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label="Toggle dark mode"
        >
          {!darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400 " />
          ) : (
            <Moon className="w-6 h-6 text-gray-600" />
          )}
        </button> */}
        <a
          href="https://github.com/YashM20/snapcut"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gradient-to-r text-opacity-90 hover:from-emerald-800/80 hover:to-emerald-700 text-white rounded-full flex items-center gap-2 from-emerald-950 to-emerald-900 transition-all duration-300 shadow-lg"
        >
          <Github className="w-5 h-5 " />
          GitHub
        </a>
      </div>
    </header>
  )
}

export default EditorHeader
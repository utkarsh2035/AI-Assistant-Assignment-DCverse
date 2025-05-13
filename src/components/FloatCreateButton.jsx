// FloatCreateButton.jsx
import React, { useState } from 'react'
import { Plus, X, User, Upload, Mail, Save } from 'lucide-react'

const FloatCreateButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          <Plus size={24} className="text-white" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-6">Create New Avatar</h2>

            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mb-4 cursor-pointer">
                <User size={32} className="text-gray-400" />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-md font-medium hover:bg-purple-200 transition cursor-pointer">
                <Upload size={16} />
                <span>Upload Image</span>
              </button>
              <p className="text-gray-500 text-sm mt-2">
                Click to upload or drag and drop
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Mail size={16} className="mr-1" />
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md text-sm font-medium hover:from-purple-600 hover:to-indigo-700 cursor-pointer" onClick={() => setIsOpen(false)}>
                <Save size={16} />
                <span>Create Avatar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatCreateButton

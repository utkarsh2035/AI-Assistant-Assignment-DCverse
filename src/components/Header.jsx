import { useState, useEffect } from 'react'

const Header = ({userName}) => {
const[greeting, setGreeting] = useState('')

useEffect(()=>{
    const hour = new Date().getHours()
    if(hour < 12){
        setGreeting('Good Morning')
    }
    else if(hour < 18){
        setGreeting('Good Afternoon')
    }
    else{
        setGreeting('Good Evening')
    }
}, [])
  return (
<header className="w-full py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium text-gray-500">🤖 AI Assistant</p>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {greeting}, {userName}
            </h1>
            
            <p className="text-gray-600 max-w-lg">
              I'm here to assist you today. How can I help you with your tasks?
            </p>
            
            <div className="pt-4">
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer">
                Start a conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>    
)
}

export default Header

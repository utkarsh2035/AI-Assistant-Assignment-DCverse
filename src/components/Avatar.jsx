import {useState, useEffect} from 'react'
import { SquarePen } from 'lucide-react';
const Avatar = () => {
    const [avatar, setAvatar] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const dummyAvatar = [
        {
            id: 1,
            firstName: 'Jhon',
            lastName: 'Doe',
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id: 2,
            firstName: 'Emma',
            lastName: 'Wong',
            image: 'https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id: 1,
            firstName: 'Charles',
            lastName: 'Morris',
            image: 'https://images.unsplash.com/photo-1672863601285-253fc82db868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
        }
    ]

    useEffect(()=>{
        const fetchAvatar = async () =>{
            try{
                const response = await fetch('https://reqres.in/api/users?page=1&per_page=3', {method: 'GET', headers: {'x-api-key': 'reqres-free-v1'}})
                const data = await response.json()
                console.log(data)
                setAvatar(data.data)
                setIsLoading(false)
            }catch(error){
                console.error('Error fetching data:', error)
                setAvatar(dummyAvatar)
                setIsLoading(false)
            }
        }
        fetchAvatar()
    },[])
  return (
        <section className="max-w-6xl mx-auto px-4 md:px-6 pt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Avatars</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 flex items-center justify-center">
                <div className="p-6">
                  <div className="animate-pulse flex flex-col items-center space-y-4">
                    <div className="rounded-full bg-gray-200 h-24 w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {avatar.map((avatar) => (
              <div 
                key={avatar.id} 
                className="overflow-hidden transition-all duration-300 border-gray-200 border-2 rounded-lg hover:shadow-md  hover:rounded-xs"
              >
                <div className="p-6 flex flex-col items-center space-y-4 bg-white ">
                  <div className="h-24 w-24">
                    {avatar.avatar ? <img src={avatar.avatar} alt={`${avatar.first_name} ${avatar.last_name}`} className='rounded-full'/> : <img src={dummyAvatar[0].image} alt={`${avatar.first_name} ${avatar.last_name}`} />}
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium">
                      {avatar.first_name} {avatar.last_name}
                    </h3>
                  </div>
                    <button
                    class="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700  hover:border-gray-400 transition all duration-300 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:cursor-pointer"
                    >
                    <SquarePen />
                    <span>Edit Avatar</span>
                    </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
  )
}

export default Avatar

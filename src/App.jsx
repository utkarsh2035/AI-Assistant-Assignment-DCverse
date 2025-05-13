import Header from './components/Header.jsx'
import './output.css'
import './index.css'
import Avatar from './components/Avatar.jsx'
import FloatCreateButton from './components/FloatCreateButton.jsx'

export default function App() {
  const userName = "Jhon Doe" 
  return (
    <div className='h-screen bg-gradient-to-b from-white to-gray-100'>
        <Header userName={userName} />
        <Avatar />
        <FloatCreateButton />
    </div>
  )
}

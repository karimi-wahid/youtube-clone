import React, { useContext } from 'react'
import menu_icon from '../assets/menu.png'
import logo from '../assets/logo.png'
import search_icon from '../assets/search.png'
import upload_icon from '../assets/upload.png'
import more_icon from '../assets/more.png'
import notification_icon from '../assets/notification.png'
import profile_icon from '../assets/user_profile.jpg'
import { AppContext } from '../features/AppContext'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const { sideToggle, setSideToggle } = useContext(AppContext)
  return (
    <nav className='w-full h-[60px] flex justify-between items-center p-5 shadow-md overflow-hidden sticky bg-white top-0 z-10'>
      <div className='flex items-center gap-3'>
        <img className='w-[30px] cursor-pointer hidden lg:block md:hidden' src={menu_icon} alt="menuIcon" onClick={() => setSideToggle(!sideToggle)} />
        <Link to='/'>
          <img className='w-[100px] cursor-pointer' src={logo} alt="logo" />
        </Link>
      </div>

      <div className='flex items-center border border-[#ccc] mr-4 py-1 px-3 rounded-lg'>
        <input type="text" placeholder='Search'
          className='md:w-[400px] w-[150px] border-none outline-none' />
        <img className='w-[20px]' src={search_icon} alt="search Icon" />
      </div>

      <div className='flex items-center gap-5'>
        <img className='w-[30px] hidden lg:block' src={upload_icon} alt="icon" />
        <img className='w-[30px] hidden lg:block' src={more_icon} alt="icon" />
        <img className='w-[30px] hidden lg:block' src={notification_icon} alt="icon" />
        <img className='w-[40px] rounded-full' src={profile_icon} alt="icon" />
      </div>
    </nav>
  )
}

export default Navbar
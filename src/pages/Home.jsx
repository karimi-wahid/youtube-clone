import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Feeds from '../components/Feeds'
import { AppContext } from '../features/AppContext'

const Home = () => {
  const {sideToggle} = useContext(AppContext)
  return (
    <>
      <Sidebar />
      <div className={`bg-[#f9f9f9] pl-[2%] md:pl-[17%] pr-[2%] py-5 ${sideToggle?'': 'pl-[7%]'} `}>
      <Feeds />
      </div>
      
    </>
  )
}

export default Home
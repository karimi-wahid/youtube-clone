import React, { useContext, useEffect } from 'react'
import PlayVideo from '../components/PlayVideo'
import Recommended from '../components/Recommended'
import { useParams } from 'react-router-dom'
import { AppContext } from '../features/AppContext'

const Video = () => {
  const {setGetVideoId, setGetCategoryId} = useContext(AppContext)
  const {videoId, categoryId} = useParams()
    setGetVideoId(videoId)
    setGetCategoryId(categoryId)
  
  return (
    <div className='bg-[#f9f9f9] px-[2%] py-5 flex justify-center lg:justify-between flex-wrap '>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video
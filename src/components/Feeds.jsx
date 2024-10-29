import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../features/AppContext'
import moment from 'moment'

const Feeds = () => {
    const {data, value_converter} = useContext(AppContext)


  return (
    <div className='grid grid-cols-custom gap-4 mt-4'>
        {data.map((item, index) => (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt="image" className='w-[100%] rounded-sm' />
            <h2 className='text-[16px] font-semibold text-[#000] my-1'>{item.snippet.title}</h2>
            <h3 className='text-[14px] font-semibold text-[#555] my-[6px]'>{item.snippet.channelTitle}</h3>
            <p className='text-[14px]'>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
        ))}
    </div>
  )
}

export default Feeds
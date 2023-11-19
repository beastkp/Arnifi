import React from 'react'
import Timeline from './Timeline'
import SideBar from './SideBar'
import Suggestions from './Suggestions'


const Homepage = () => {
  return (
    <div className='flex '>
        <SideBar />
        {/* <Post/>  */}
        <Timeline/>
        <Suggestions className='sticky right-0'/>

    </div>
  )
}

export default Homepage
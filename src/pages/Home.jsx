import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
    return (
        <div >
            <div className='h-screen w-screen fixed bg-red-800'>

                <Video />
            </div>
            <div className='h-screen w-screen relative flex flex-col'>
                <HomeHeroText />
                <HomeBottomText />
            </div>
        </div>

    )
}

export default Home
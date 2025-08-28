import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] text-[9.5vw] uppercase text-center '>

            <div className='leading-[9vw] '>L'étincelle</div>
            <div className="flex items-center justify-center text-[9vw] leading-[9vw]">
                <span className="">qui</span>
                <div className="w-[20vw] h-[7vw] flex items-center justify-center rounded-full overflow-hidden">
                    <Video />
                </div>
                <span className="">génère</span>
            </div>

            <div className='leading-[9vw] '>la créativité</div>
        </div>
    )
}

export default HomeHeroText
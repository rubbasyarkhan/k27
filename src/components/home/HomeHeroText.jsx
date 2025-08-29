import React from 'react';
import Video from './Video';

const HomeHeroText = () => {
    return (
        <div className="relative flex flex-col items-center w-full">
            <div className="absolute font-[font2] text-[5vw] left-2  lg:text-[6vw]">
                K72
            </div>
            
            <div className="font-[font1] mt-72 lg:mt-0 pt-5 text-center w-full">
                <div className="lg:text-[9.5vw] text-[12vw] flex items-center justify-center uppercase lg:leading-[7vw] leading-[10vw]">
                    L'étincelle
                </div>
                
                <div className="lg:text-[9.5vw] text-[12vw] flex items-start justify-center uppercase lg:leading-[11vw] leading-[10vw]">
                    <span>qui</span>
                    <div className="h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden">
                        <Video />
                    </div>
                    <span>génère</span>
                </div>
                
                <div className="lg:text-[9.5vw] text-[12vw] flex items-center justify-center uppercase lg:leading-[5vw] leading-[10vw]">
                    la créativité
                </div>
            </div>
        </div>
    );
};

export default HomeHeroText;

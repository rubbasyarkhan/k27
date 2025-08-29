import React from 'react';
import Video from '../components/home/Video';
import HomeHeroText from '../components/home/HomeHeroText';
import HomeBottomText from '../components/home/HomeBottomText';

const Home = () => {
    return (
        <div>
            {/* Full-screen video */}
            <div className="h-screen w-screen fixed ">
                <Video />
            </div>

            {/* Content section */}
            <div className="relative flex flex-col items-center justify-between">
                <div className="h-screen w-full flex flex-col justify-between">
                    <HomeHeroText />
                    <HomeBottomText />
                </div>
            </div>
        </div>
    );
};

export default Home;

import React from 'react';
import homevideo from '../../assets/Herosectionvid.mp4';

const Video = () => {
  return (
    <div className="w-full h-full"> 
      <video
        // src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756498393~exp=1756501993~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=2f9901268d1b6e2bee5ed95dc55afb75a3185be4b27197af287fc055a581e7e4&r=dXMtd2VzdDE%3D"
        src={homevideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        // playsInline
        // preload="auto"
      />
    </div>
  );
};

export default Video;

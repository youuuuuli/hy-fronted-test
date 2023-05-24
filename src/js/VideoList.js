import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player'

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const response = await fetch('http://localhost:3030/following_list');
    const data = await response.json();

    setVideos(data.items);
  }

  return (
    <div className="">
      <ReactPlayer
        url='http://localhost:3030/media/Audi_A4_S4.m3u8'
        width="100%"
        loop
        controls
        muted
        playing
        config={{
          file: {
            forceHLS: true,
          }
        }}
      />
    </div>
  );
};

export default VideoList;

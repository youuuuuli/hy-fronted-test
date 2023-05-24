import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoItem = (props) => {
  const { pages = '' } = props;
  const [videos, setVideos] = useState([]);
  // const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!!pages) {
      getVideos();
    }
  }, [pages]);

  async function getVideos() {
    const response = await fetch(`http://localhost:3030/${pages}`);
    const data = await response.json();

    setVideos(data.items);
  }

  return (
    <>
      {videos.map((video, i) => (
        <div key={i}>
          <ReactPlayer
            url={video.play_url}
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
      ))}
    </>
  );
}

export default VideoItem;

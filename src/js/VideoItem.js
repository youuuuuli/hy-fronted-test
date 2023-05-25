import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoItem = (props) => {
  const { pages = '' } = props;
  const [videos, setVideos] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!pages) {
      return;
    }

    getVideos();
  }, [pages]);

  async function getVideos() {
    const response = await fetch(`http://localhost:3030/${pages}`);
    const data = await response.json();

    setVideos(data.items);
  }

  function handleProgress(state) {
    // console.log(state);
    setProgress(state.played);
  }

  return (
    <div className="video-box">
      {videos.map((video, i) => (
        <div key={i}>
          <div className="explain">
            <div className="explain-video-bar">
              <div
                className="explain-video-bar-w"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          <ReactPlayer
            className="video"
            url={video.play_url}
            width="100%"
            loop
            // controls
            muted
            playing
            config={{
              file: {
                forceHLS: true,
              }
            }}
            onProgress={handleProgress}
          />

          <span>{video.title}</span>
        </div>
      ))}
    </div>
  );
}

export default VideoItem;

import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoItem = (props) => {
  const { video = {} } = props;
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [progress, setProgress] = useState(0);

  const options = {
    root: document.querySelector('.video-box'),
    rootMargin: '0px',
    threshold: 0.9,
  };

  const callBack = (entries) => {
    const { isIntersecting } = entries[0]

    if (isIntersecting) {
      setIsPlay(true);
    } else {
      setIsPlay(false);
    }
  }

  const observer = new IntersectionObserver(callBack, options);

  useEffect(() => {
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    }
  }, []);

  function handleProgress(state) {
    const newProgress = Number(state.played.toFixed(3));

    setProgress(newProgress);
  }

  return (
    <div ref={videoRef} className="box">
      <div className="explain">
        <div className="explain-video-bar">
          <span>{video.title}</span>
          <div
            className={`explain-video-bar-w ${progress < 0.01 ? 'end' : ''}`}
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      <div className="move">
        <ReactPlayer
          className="video"
          url={video.play_url}
          width="100%"
          loop
          muted
          playing={isPlay}
          config={{
            file: {
              forceHLS: true,
            }
          }}
          onProgress={handleProgress}
        />

        {!isPlay && (
          <div className="mask">
            <img
              alt={video.title}
              src={video.cover}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoItem;

import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Home, Search } from '@mui/icons-material';
import VideoItem from './VideoItem';

const topMap = [
  {
    label: "Following",
    value: "following_list",
  },
  {
    label: "For You",
    value: "for_you_list",
  },
];

const bottomMap = [
  {
    icon: <Home />,
    label: "Home",
    value: "home",
  },
  {
    icon: <Search />,
    label: "Discover",
    value: "discover",
  },
];

const VideoList = () => {
  const [top, setTop] = useState(topMap[1].value);
  const [bottom, setBottom] = useState(bottomMap[0].value);

  function handleTopChange(ev, value) {
    setTop(value);
  }

  function handleBottomChange(ev, value) {
    setBottom(value);
  }

  return (
    <div className="container">
      <div className="overlay">
        <VideoItem pages={top} />
      </div>

      <Tabs
        centered
        className="top"
        value={top}
        variant="fullWidth"
        onChange={handleTopChange}
      >
        {topMap.map(({ label, value }) => (
          <Tab
            key={value}
            label={label}
            value={value}
          />
        ))}
      </Tabs>

      <Tabs
        centered
        className="bottom"
        value={bottom}
        variant="fullWidth"
        onChange={handleBottomChange}
      >
        {bottomMap.map(({ icon, label, value }) => (
          <Tab
            icon={icon}
            key={value}
            label={label}
            value={value}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default VideoList;

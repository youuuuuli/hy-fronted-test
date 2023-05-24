import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import VideoItem from './VideoItem';

const pagesMap = [
  {
    label: "Following",
    value: "following_list",
  },
  {
    label: "For You",
    value: "for_you_list",
  },
];

const VideoList = () => {
  const [pages, setPages] = useState(pagesMap[1].value);

  function handleChange(ev, value) {
    setPages(value);
  }

  return (
    <>
      {/* Tabs */}
      <Tabs
        value={pages}
        variant="fullWidth"
        onChange={handleChange}
      >
        {pagesMap.map(({ label, value }) => (
          <Tab
            key={value}
            label={label}
            value={value}
          />
        ))}
      </Tabs>

      {/* Content */}
      <VideoItem pages={pages} />
    </>
  );
};

export default VideoList;

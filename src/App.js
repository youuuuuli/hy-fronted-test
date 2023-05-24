import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoList from './js/VideoList';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={(
          <VideoList />
        )} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

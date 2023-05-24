import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoList from './js/VideoList';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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

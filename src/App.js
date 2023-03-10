import React from 'react';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Video from './pages/Video';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos/:videoId' element={<Video />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

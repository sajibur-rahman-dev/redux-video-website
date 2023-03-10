import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';


const AppRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/videos/:videoId' element={<Video />} />
        </Routes>
    )
}

export default AppRouters
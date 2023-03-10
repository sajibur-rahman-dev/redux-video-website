import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Tags from '../components/Tags/Tags';
import Videos from '../components/Home/Videos/Videos';
import Pagination from '../components/ui/Pagination';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
        <Tags/>
        <Videos/>
        <Pagination/>
    </>
  )
}

export default Home
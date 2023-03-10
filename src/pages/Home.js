import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Tags from '../components/Tags/Tags';
import Videos from '../components/Videos/Videos';
import Pagination from '../components/ui/Pagination';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
        <NavBar/>
        <Tags/>
        <Videos/>
        <Pagination/>
        <Footer/>
    </>
  )
}

export default Home
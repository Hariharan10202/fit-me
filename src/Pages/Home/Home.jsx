import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Getapp from '../../Components/GetApp/Getapp';
import Goal from '../../Components/Goal/Goal';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Video from '../../Components/Video/Video';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Header />
      <Goal />
      <Video />
      <Getapp />
      <Footer />
    </div>
  );
};

export default Home;

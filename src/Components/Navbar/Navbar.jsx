import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <div className={isScrolled ? `${styles.Navbar} ${styles.scrolled}` : styles.Navbar}>
      <div className={styles.Wrapper}>
        <div className={styles.logo}>
          <h1>Fit-Me</h1>
        </div>
        <div className={styles.routes}>
          <Link className='link' to='/login'>
            <span>Login</span>
          </Link>
          <Link className='link' to='/signup'>
            <span>Signup</span>
          </Link>
          <span>About us</span>
          <span>Support</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

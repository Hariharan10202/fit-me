import React from 'react';
import styles from './Header.module.css';
import { BsApple } from 'react-icons/bs';
import { DiAndroid } from 'react-icons/di';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia vitae soluta minima! In
          necessitatibus dolore aperiam numquam iste id, provident cupiditate non consequuntur
          minima iure molestias dolores incidunt dignissimos nihil.
        </p>
        <div className={styles.btn}>
          <button type='button'>
            <span>
              <BsApple />
            </span>
            Download
          </button>
          <button type='button'>
            <span>
              <DiAndroid />
            </span>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

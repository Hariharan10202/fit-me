import React from 'react';
import styles from './Getapp.module.css';

import { BsApple } from 'react-icons/bs';
import { DiAndroid } from 'react-icons/di';

const Getapp = () => {
  return (
    <div className={styles.getapp}>
      <div className={styles.content}>
        <h3>Dare to be great with spectacular fitness</h3>
      </div>
      <div className={styles.btns}>
        <button>
          <span>
            <BsApple />
          </span>
          Get App
        </button>
        <button>
          <span>
            <DiAndroid />
          </span>
          Get App
        </button>
      </div>
    </div>
  );
};

export default Getapp;

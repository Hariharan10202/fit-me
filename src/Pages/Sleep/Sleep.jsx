import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { FiArrowUp } from 'react-icons/fi';
import { FiArrowDown } from 'react-icons/fi';
import { ImSleepy } from 'react-icons/im';

import styles from './Sleep.module.css';
const Sleep = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles.progress}>
          <CircularProgressbar value={70} text='70%' strokeWidth={5} />
        </div>
        <div className={styles.sleepInfo}>
          <div className={styles.top}>
            <h1>
              <ImSleepy className={styles.sleepIcon} />
              Sleepness Rate
            </h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomList}>
              <span className={styles.key}>Target</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>6 hours/day </span>
            </div>
            <div className={styles.bottomList}>
              <span className={styles.key}>Achieved</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>8 hours/day</span>
            </div>
            <div className={styles.stats}>
              <div className={styles.statsList}>
                <FiArrowUp />
                <p>+20%</p>
              </div>
              <div className={styles.statsList}>
                <FiArrowDown />
                <p>-32%</p>
              </div>
            </div>
            <div className={styles.btn}>
              <button>Set Goal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sleep;

import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from '../../walkingData';
import styles from './Walking.module.css';

import { FiArrowUp } from 'react-icons/fi';
import { FaWalking } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';

const Walking = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles.progress}>
          <BarChart width={700} height={400} data={data}>
            <CartesianGrid stroke='black' strokeDasharray='3 3' />
            <XAxis stroke='black' dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='km' fill='#8884d8' />
          </BarChart>
        </div>
        <div className={styles.walkInfo}>
          <div className={styles.top}>
            <h1>
              <FaWalking className={styles.walkIcon} />
              Walking Progress
            </h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomList}>
              <span className={styles.key}>Target</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>40KM</span>
            </div>
            <div className={styles.bottomList}>
              <span className={styles.key}>Achieved</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>32KM</span>
            </div>
            <div className={styles.bottomList}>
              <span className={styles.key}>Calories</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>120kcal</span>
            </div>
            <div className={styles.bottomList}>
              <span className={styles.key}>Speed</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>24km/hr</span>
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

export default Walking;

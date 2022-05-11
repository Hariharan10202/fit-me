import React from 'react';
import styles from './Cycling.module.css';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { data } from '../../cyclingData';

import { IoBicycleSharp } from 'react-icons/io5';
import { FiArrowUp } from 'react-icons/fi';
import { FiArrowDown } from 'react-icons/fi';

const Cycling = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles.progress}>
          <LineChart
            width={750}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeWidth={2} stroke='white' strokeDasharray='1' />
            <XAxis stroke='white' dataKey='name' />
            <YAxis stroke='white' />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='kcal' stroke='#2b2a2c' activeDot={{ r: 8 }} />
            <Line type='monotone' strokeWidth={2} dataKey='speed' stroke='#821ae3' />
            <Line type='monotone' dataKey='km' stroke='#b6de15' />
          </LineChart>
        </div>
        <div className={styles.cyclingInfo}>
          <div className={styles.top}>
            <h1>
              <IoBicycleSharp className={styles.cycleIcon} />
              Cycling Progress
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

export default Cycling;

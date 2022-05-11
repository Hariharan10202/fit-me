import React from 'react';
import styles from './Running.module.css';

import { FaRunning } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { FiArrowDown } from 'react-icons/fi';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { data } from '../../runningData';

const Running = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles.progress}>
          <AreaChart
            width={700}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis stroke='white' dataKey='name' />
            <YAxis stroke='white' />
            <Tooltip />
            <Area type='monotone' dataKey='km' stackId='1' stroke='#ffffff' fill='#b2b2b6' />
            <Area type='monotone' dataKey='kcal' stackId='1' stroke='#545454' fill='#6f6f6f' />
            <Area type='monotone' dataKey='speed' stackId='1' stroke='#a0a0a0' fill='#f7f7f7' />
            <Legend />
          </AreaChart>
        </div>
        <div className={styles.runningInfo}>
          <div className={styles.top}>
            <h1>
              <FaRunning className={styles.runIcon} />
              Running Progress
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

export default Running;

import React from 'react';
import {
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts';
import { data01, data02 } from '../../stressData';

import { FiArrowUp } from 'react-icons/fi';
import { FiArrowDown } from 'react-icons/fi';
import { GiDistressSignal } from 'react-icons/gi';

import styles from './Stress.module.css';

const Stress = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles.progress}>
          <ScatterChart
            width={730}
            height={450}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
          >
            <CartesianGrid stroke='gray' strokeWidth={3} strokeDasharray='0' />
            <XAxis stroke='black' dataKey='x' name='stature' unit='cm' />
            <YAxis dataKey='y' name='stress' unit='kg' />
            <ZAxis dataKey='z' range={[64, 144]} name='level' unit='km' />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name='A school' data={data01} fill='#ffffff' />
            <Scatter name='B school' data={data02} fill='#541ea5' />
          </ScatterChart>
        </div>
        <div className={styles.stressInfo}>
          <div className={styles.top}>
            <h1>
              <GiDistressSignal className={styles.stressIcon} />
              Sleepness Rate
            </h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomList}>
              <span className={styles.key}>Target</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>1 to 10 </span>
            </div>
            <div className={styles.bottomList}>
              <span className={styles.key}>Achieved</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>2 to 11.1</span>
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

export default Stress;

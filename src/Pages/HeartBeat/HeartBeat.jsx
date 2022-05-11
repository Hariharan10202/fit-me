import React from 'react';
import { Legend, RadialBar, RadialBarChart, Tooltip } from 'recharts';
import { data } from '../../heartBeatData';
import styles from './HeartBeat.module.css';

import { FiArrowUp } from 'react-icons/fi';
import { FiArrowDown } from 'react-icons/fi';
import { GiHeartBeats } from 'react-icons/gi';

const HeartBeat = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles.progress}>
          <RadialBarChart
            width={730}
            height={250}
            innerRadius='10%'
            outerRadius='100%'
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: '#666', position: 'insideStart' }}
              background
              clockWise={true}
              dataKey='uv'
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout='vertical'
              verticalAlign='middle'
              align='right'
            />
            <Tooltip />
          </RadialBarChart>
        </div>
        <div className={styles.heartBeatInfo}>
          <div className={styles.top}>
            <h1>
              <GiHeartBeats className={styles.heartBeatIcon} />
              HeartBeat Rate
            </h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomList}>
              <span className={styles.key}>Target</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>60 – 100 beats per minute</span>
            </div>
            <div className={styles.bottomList}>
              <span className={styles.key}>Achieved</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>60 – 80 beats per minute</span>
            </div>
            <div className={styles.bottomList}>
              <span className={styles.key}>Cardio</span>
              <span className={styles.highfen}>-</span>
              <span className={styles.value}>120kcal</span>
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

export default HeartBeat;

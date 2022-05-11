import React from 'react';
import styles from './Goal.module.css';

import { FaHeartbeat } from 'react-icons/fa';
import { FaRunning } from 'react-icons/fa';
import { BiCycling } from 'react-icons/bi';
import { FaWalking } from 'react-icons/fa';
import { ImSleepy } from 'react-icons/im';
import { GiDistressSignal } from 'react-icons/gi';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

import { data } from '../../dummyData';
import { Link } from 'react-router-dom';

const Goal = () => {
  return (
    <>
      <div className={styles.goal}>
        <div className={styles.goalHeader}>
          <h1>Your Progress</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aliquam obcaecati animi,
            veniam dolorem blanditiis. lorem5
          </p>
        </div>
        <div className={styles.goalContainer}>
          <div className={styles.progressBar}>
            <RadarChart height={420} width={500} outerRadius={150} data={data}>
              <PolarGrid />
              <PolarAngleAxis stroke='white' dataKey='Name' />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name='Mike' dataKey='A' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
              <Radar name='Lily' dataKey='B' stroke='#82ca9d' fill='#82ca9d' fillOpacity={0.6} />
            </RadarChart>
          </div>
          <div className={styles.progress}>
            <div className={styles.progressLists}>
              <Link className='link' to='/heartrate'>
                <div className={styles.list}>
                  <FaHeartbeat className={styles.icon} />
                  <span>Heart rate</span>
                </div>
              </Link>
              <Link className='link' to='/running'>
                <div className={styles.list}>
                  <FaRunning className={styles.icon} />
                  <span>Running</span>
                </div>
              </Link>
              <Link className='link' to='/cycling'>
                <div className={styles.list}>
                  <BiCycling className={styles.icon} />
                  <span>Cycling</span>
                </div>
              </Link>
              <Link className='link' to='/walking'>
                <div className={styles.list}>
                  <FaWalking className={styles.icon} />
                  <span>Waliking</span>
                </div>
              </Link>
              <Link className='link' to='/sleep'>
                <div className={styles.list}>
                  <ImSleepy className={styles.icon} />
                  <span>Sleep</span>
                </div>
              </Link>
              <Link className='link' to='/stress'>
                <div className={styles.list}>
                  <GiDistressSignal className={styles.icon} />
                  <span>Stress</span>
                </div>
              </Link>
            </div>
            <div className={styles.btn}>
              <button>Set Goal</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goal;

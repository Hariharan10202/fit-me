import React from 'react';
import styles from './Video.module.css';
import VideoClip from "../../Video/vlc-record-2022-05-11-00h15m57s-The Rock's Ultimate Workout.mp4-.mp4";

const Video = () => {
  return (
    <div className={styles.videoBackground}>
      <video autoPlay={true} loop muted>
        <source src={VideoClip} type='video/mp4' />
      </video>
    </div>
  );
};

export default Video;

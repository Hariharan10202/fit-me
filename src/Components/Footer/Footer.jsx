import React from 'react';
import styles from './Footer.module.css';

import { GrInstagram } from 'react-icons/gr';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.SocialList}>
        <GrInstagram className={styles.icon} />
        <FaFacebookSquare className={styles.icon} />
        <FaTwitter className={styles.icon} />
      </div>
      <p>&#169; Hariharan 2022</p>
    </div>
  );
};

export default Footer;

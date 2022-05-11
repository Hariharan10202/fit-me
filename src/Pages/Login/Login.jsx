import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.formDetails}>
        <h1>Login</h1>
        <div className={styles.InputField}>
          <input type='text' placeholder='Email' />
        </div>
        <div className={styles.InputField}>
          <input type='password' placeholder='Password' />
        </div>
        <div className={styles.btn}>
          <button>Login</button>
          <p>
            New User?
            <Link className='link' to='/signup'>
              <span>Create an account</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

const Signup = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.formDetails}>
        <h1>Sign In</h1>
        <div className={styles.InputField}>
          <input type='text' placeholder='FullName' />
        </div>
        <div className={styles.InputField}>
          <div className=''>
            <input type='radio' id='male' value='male' placeholder='Gender' name='gender' />
            <label htmlFor='male'>Male</label>
          </div>
          <div className=''>
            <input type='radio' id='female' name='gender' value='female' placeholder='Gender' />
            <label htmlFor='female'>Female</label>
          </div>
        </div>
        <div className={styles.InputField}>
          <input type='email' placeholder='Email ID' />
        </div>
        <div className={styles.InputField}>
          <input type='password' placeholder='Password' />
        </div>
        <div className={styles.InputField}>
          <input type='password' placeholder='Confirm Password' />
        </div>
        <div className={styles.InputField}>
          <input type='text' placeholder='Contact Number' />
        </div>
        <div className={styles.InputField}>
          <input type='text' placeholder='Height' />
        </div>
        <div className={styles.InputField}>
          <input type='text' placeholder='Weight' />
        </div>
        <div className={styles.btns}>
          <button>Create Account</button>
          <p>
            Have an account?
            <Link to='/login' className='link'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

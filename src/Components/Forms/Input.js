import React from 'react';
import styles from './css/Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input className={styles.input} type={type} id={name} name={name} />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;

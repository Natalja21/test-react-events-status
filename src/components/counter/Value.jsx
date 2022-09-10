import React from 'react';
import styles from './Counter.module.css';

const Value = ({ value }) => {
    return (
        <span className={styles.counter__value}>{value}</span>
    )
}
export default Value;
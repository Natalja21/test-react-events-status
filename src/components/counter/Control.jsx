import React from 'react';
import styles from './Counter.module.css';

const Control = ({ onIncrement, onDescrement }) => {
    return (
    <div className={styles.counter__buttons}>
          <button
            className={styles.counter__btn}
            type="button"
            onClick={onIncrement}
          >
            +1
          </button>
          <button
            className={styles.counter__btn}
            type="button"
            onClick={onDescrement}
          >
            -1
          </button>
        </div>
)
    
}
export default Control;
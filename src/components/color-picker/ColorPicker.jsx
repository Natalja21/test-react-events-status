import React, { Component } from 'react';
import styles from './ColorPicker.module.css';

class ColorPicker extends Component {
    state = {
        optionIdx: 0,

    }
    setActivIdx = (index) => {
        this.setState({optionIdx: index})
    }
    render() {
        const { optionIdx } = this.state 
        const {label, color} = this.props.options[this.state.optionIdx]
       
    return (
      <div className={styles.ColorPicker}>
        <h2 className={styles.ColorPicker__title}>Color Picker</h2>
        <div className={styles.ColorPicker__options}>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                type="button"
                className={styles.ColorPicker__btn}
                key={label}
                    style={{ backgroundColor: color }}
                    onClick = {(()=> this.setActivIdx(index))}
                ></button>
                
            );
          })}
            </div>
            <span>{optionIdx}</span>
            <span>{label}</span>
            <span>{color}</span>
      </div>
    );
  }
}
export default ColorPicker;

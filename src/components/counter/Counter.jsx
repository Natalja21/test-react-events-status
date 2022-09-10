import React from 'react';
import PropTypes from 'prop-types';
import Control from './Control';
import Value from './Value';
import styles from './Counter.module.css';
class Counter extends React.Component {
  // default values props если не укажем в App то все равно подставится это значение
  static defaultProps = {
    initialValue: 0,
  };
  static propsType = {
    value: PropTypes.number.isRequired,
  };
  // constructor() {
  //     super();
  //     this.state = {
  //         value : 0,
  //     }
  // };
  //  ------ вместо constructor
  // state = {
  //    value : 0,
  // }

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    console.log('click +1');
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDescrement = () => {
    console.log('click -1');
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  // // ---------setTimeout console.log(e.targe) => ok (last error)
  // handleDescrement = (e) => {
  //     setTimeout(() => {
  //        console.log(e.target);
  //    }, 1000)
  // }
  // //  -------- setTimeout console.log(e.targe) => ok
  // // handleDescrement = (e) => {
  // //      const target = e.target;
  // //       console.log('click -1', this);
  // //     setTimeout(() => {
  // //        console.log(target);
  // //    }, 1000)
  // // }
  render() {
    return (
      <div className={styles.counter}>
            {/* <span className={styles.counter__value}>{this.state.value}</span> */}
            <Value value={this.state.value } />
            {/* <div className={styles.counter__buttons}>
          <button
            className={styles.counter__btn}
            type="button"
            onClick={this.handleIncrement}
          >
            +1
          </button>
          <button
            className={styles.counter__btn}
            type="button"
            onClick={this.handleDescrement}
          >
            -1
          </button>
        </div> */}
        <Control
          onIncrement = {this.handleIncrement}
          onDescrement = {this.handleDescrement}
        />
      </div>
    );
  }
}
export default Counter;

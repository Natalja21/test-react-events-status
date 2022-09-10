import { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };
//   show = () => {
//     this.setState({ visible: true });
//   };
//   hide = () => {
//     this.setState({ visible: false });
//   };
    
    togle = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible,
            };
        })
    }
    render() {
     const {visible} = this.state
    return (
      <div className={styles.dropdown}>
        {/* <button className={styles.btn} type="button" onClick={this.show}>
          Show
        </button>
        <button className={styles.btn} type="button" onClick={this.hide}>
          Hide
        </button> */}
<button className={styles.btn} type="button" onClick={this.togle}>
          {visible ? "Hide":"Show"}
        </button>
        {visible && <div className={styles.menu}>Show Window</div>}
      </div>
    );
  }
}
export default Dropdown;

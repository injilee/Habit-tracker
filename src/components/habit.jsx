import React, { PureComponent } from 'react';
import styles from 'habit.module.css';

class Habit extends PureComponent {
  componentDidMount() {
    console.log(`habit: ${this.props.habits.name} mounted`);
  }

  componentWillUnmount() {
    console.log(`habit: ${this.props.habits.name} unmount`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habits);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habits);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habits);
  };

  render() {
    const { name } = this.props.habits;
    const { count } = this.props;
    // console.log({name});
    return (
      <li className={styles.habit}>
        <span className="habit-item">{name}</span>
        <span className={styles['habit-count']}>{count}</span>
        <button
          className={`${styles['habit-button']} ${styles['habit-increase']}`}
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className={`${styles['habit-button']} ${styles['habit-decrease']}`}
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className={`${styles['habit-button']} ${styles['habit-delete']}`}
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

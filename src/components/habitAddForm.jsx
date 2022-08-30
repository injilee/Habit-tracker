import React from 'react';
import styles from 'habitAddForm.module.css';

const HabitAddForm = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const habitName = inputRef.current.value;
    habitName && props.onAdd(habitName);
    // this.inputRef.current.value = '';
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className={styles.addInput}
        placeholder="Habit"
      />
      <button className={styles.addBtn}>Add</button>
    </form>
  );
};

export default HabitAddForm;

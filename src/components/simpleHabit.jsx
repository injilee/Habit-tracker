import '../app.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log(`mounted & updated! : ${count}`);
  }, []);
  // console에는 업뎃한 내용이 출력되지 않는다.

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

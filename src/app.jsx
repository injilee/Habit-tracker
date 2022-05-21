import React from 'react';
import './app.css';
import Habits from './components/habits';

function App(){
  return (
  <React.StrictMode>
    <nav>
      <i className="fas fa-leaf"></i>
      <h1 className='habit-tracker'>Habit Tracker</h1>
      <span className='habit-tracker-count'>0</span>
    </nav>
    <input type="text" className='habit-input' placeholder='Habit'/>
    <button className='add-btn'>Add</button>
    <Habits />
    <button className='reset-btn'>Reset All</button>
  </React.StrictMode>
  )
}

export default App;

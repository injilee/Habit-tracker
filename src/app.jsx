import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

export default class App extends Component{
    state = {
      totalCount : 0
    }

    // totalCount = habit => {
    //   this.setState(habit);
    // }

    
    render(){
      return (
        <React.StrictMode>
          <Habits />
        </React.StrictMode>
        )
    }
}

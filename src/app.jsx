import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import NavBar from './components/navBar';

export default class App extends Component{
      state = {
        habits : [
            { id:1, name: 'Reading', count: 0},
            { id:2, name: 'Running', count: 0},
            { id:3, name: 'Coding', count: 0}
        ]
    }

    handleIncrement = habit => {
        const habits = this.state.habits.map(item => {
          if(item.id === habit.id){
            return { ...habit, count : habit.count + 1};
          }
          return item;
        })
        this.setState({ habits });
        // console.log(this.state.habits);
    }

    handleDecrement = habit => {
        const habits = this.state.habits.map(item => {
          if(item.id === habit.id){
            const count = habit.count - 1;
            return { ...habit, count : count < 0 ? 0 : count};
          }
          return item;
        })
        this.setState({ habits });
    }

    handleDelete = habit => {
        // splice
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits.splice(index, 1);

        // filter
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    }

    handleAdd = habitName => {
        const habits = [...this.state.habits,{id: Date.now(), name: habitName, count: 0} ];
        this.setState({ habits });
    }

    handleReset = () => {
        const habits = this.state.habits.map((habit) => {
            habit.count = 0
            return habit;
        });
        this.setState({ habits });
        console.log(habits);
    }

    
    render(){
      return (
          <>
            <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length} />
            <Habits  
              habits={this.state.habits}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
              onReset={this.handleReset}
            />
          </>
        )
    }
}

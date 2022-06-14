import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm'
import NavBar from './navBar'

export default class Habits extends Component {
    state = {
        habits : [
            { id:1, name: 'Reading', count: 0},
            { id:2, name: 'Running', count: 0},
            { id:3, name: 'Coding', count: 0}
        ]
    }

    handleIncrement = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits });
        // console.log(this.state.habits);
    }

    handleDecrement = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
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
        const habits = this.state.habits.map(habit => {
            habit.count = 0
            return habit;
        });
        this.setState({ habits });
        console.log(habits);
    }

    render() {
        return (
            <>
                <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length} />
                <HabitAddForm onAdd={this.handleAdd}/>

                <ul>
                    {this.state.habits.map(habits => (
                    <Habit 
                    key={habits.id}
                    habits={habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    />
                ))}
                </ul>
                <button className='reset-btn' onClick={this.handleReset}>Reset All</button>
            </>
        )
    }
}

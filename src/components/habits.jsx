import React, { Component } from 'react'
import Habit from './habit'
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

    // inputName = e => {
    //     const text = e.target.value;
    //     const habit = {
    //         id : 4,
    //         name : text,
    //         count : 0
    //     }
    //     console.log(habit);
    // }

    // handleAdd = e => {
    //     const habits = [...this.state.habits];
    //     this.setState({ habits });
    // }

    handleReset = () => {
        const habits = [];
        this.setState({ habits });
    }

    // countChage = () => {
    //     const totalCount = this.state.habits.filter(item => item.count > 0).length;
    // }


    render() {
        return (
            <>
                <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length} />
                <input type="text" className='habit-input' placeholder='Habit'/>
                <button className='add-btn'>Add</button>

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

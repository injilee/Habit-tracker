import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
    state = {
        habit : [
            { name: 'Reading', count: 0},
            { name: 'Running', count: 0},
            { name: 'Codinng', count: 0}
        ]
    }

    handleIncrement = habit => {
        console.log(`handle : ${habit.name}`);
    }

    handleDecrement = habit => {
        console.log(`handle : ${habit.name}`);
    }

    handleDelete = habit => {
        console.log(`handle : ${habit.name}`);
    }

    render() {
        return (
            <ul>
                {this.state.habit.map(habit => (
                <Habit 
                key={habit.id}
                habit={habit}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                />
            ))}
            </ul>
        )
    }
}

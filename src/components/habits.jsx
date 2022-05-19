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
        const habits = [...this.state.habit];
        const index = habits.indexOf(habit);
        habits[index].count++
        this.setState({ habits });
        // console.log(`${habit.count++}`);
    }

    handleDecrement = habit => {
        const habits = [...this.state.habit];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits });
    }

    handleDelete = habit => {
        const habits = this.state.habit.filter(item => item.id !== habit.id);
        this.setState({ habits });
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

import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm'

class Habits extends Component {
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    }

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    }

    handleDelete = habit => {
        this.props.onDelete(habit);
    }
    
    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        return (
            <div className='habits'>
                <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map(habits => (
                    <Habit 
                        key={habits.id}
                        habits={habits}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                ))}
                </ul>
                <button className='reset-btn' onClick={this.props.onReset}>Reset All</button>
            </div>
        )
    }
}

export default Habits;
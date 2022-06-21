import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    componentDidMount(){
        console.log(`habit: ${this.props.habits.name} mounted`);
    }

    componentWillUnmount(){
        console.log(`habit: ${this.props.habits.name} unmount`);
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habits);
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.habits);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habits);
    }

    render() {
        const { name } = this.props.habits;
        const { count } = this.props;
        // console.log({name});
        return (
            <li className='habit'>
                <span className="habit-item">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
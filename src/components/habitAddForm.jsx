import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const habitName = this.inputRef.current.value;
        habitName && this.props.onAdd(habitName);
        // this.inputRef.current.value = '';
        this.formRef.current.reset();
    }

    render() {
        return (
            <>
                <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} type="text" className='add-input' placeholder='Habit'/>
                    <button className='add-btn'>Add</button>
                </form>
            </>
        );
    }
}

export default HabitAddForm;
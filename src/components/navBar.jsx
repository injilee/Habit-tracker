import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <React.StrictMode>
                <nav>
                    <i className="fas fa-cart-arrow-down"></i>
                    <h1 className='habit-tracker'>Shopping basket</h1>
                    <span className='habit-tracker-count'>{this.props.totalCount}</span>
                </nav>
            </React.StrictMode>
        );
    }
}

export default NavBar;
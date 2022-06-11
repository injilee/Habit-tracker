import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <>
                <nav>
                    <i className="fas fa-cart-arrow-down"></i>
                    <h1 className='habit-tracker'>Shopping basket</h1>
                    <span className='habit-tracker-count'>{this.props.totalCount}</span>
                </nav>
            </>
        );
    }
}

export default NavBar;
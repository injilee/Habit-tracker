import React, { PureComponent } from 'react';
import styles from 'navBar.module.css';

class NavBar extends PureComponent {
  render() {
    return (
      <>
        <nav>
          <i className="fas fa-cart-arrow-down"></i>
          <h1 className={styles['habit-tracker']}>Shopping basket</h1>
          <span className={styles['habit-tracker-count']}>
            {this.props.totalCount}
          </span>
        </nav>
      </>
    );
  }
}

export default NavBar;

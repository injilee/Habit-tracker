import React, { Component } from 'react';

class Props extends Component {
    handleClick = event => {
        console.log(event);
    }

    render(){
        // 컴포넌트 안에서 state와 prop에 접근해서(오브젝트에 접근해서) 정해진 데이터를 읽을 수 있다.
        return <LikeButton title={'Like'} onClick={this.handleClick}/>;
    }
}

class LikeButton extends Component{
    state = {
        numberOfLikes: 0,
    };

    render(){
        console.log(this.props);
        console.log(this.state);
        return <button>{this.state.numberOfLikes}</button>
    }
}

export default Props;
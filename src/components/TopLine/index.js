import React, {Component} from 'react';

class TopLine extends Component {

    render(){

        const {id} = this.props;

        return (
            <span id={id}></span>
        )
    }
}

export default TopLine;
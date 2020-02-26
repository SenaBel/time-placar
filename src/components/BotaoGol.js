import React, { Component } from 'react';

class BotaoGol extends Component {

    // CREATING THE METHOD OR THE FUNCTION HANDLECLICK

    handleClick(e){
        e.preventDefault() // CANCELS THE BEHAVIOR OF THE DEFAULT EVENT

        this.props.marcarGol()
    }

    render() {
        return (
           <button onClick={this.handleClick.bind(this)}>Gol!</button>
        )
    }
}

export default BotaoGol;
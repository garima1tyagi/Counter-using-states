import React, { Component } from 'react'


class StateFullBtn extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name : "Garima"
        }
    this.handleClick = this.handleClick.bind(this)
    }
    
 handleClick() {
    this.setState({
        name: 'You are loggedIn Garima'
    })  
}

    render(){
        const {name} = this.state
        return(
            <div>
            <h3>Hi, I am working on maintaining States. You can see how my states changes </h3>
            <h4>Welcome, {name}</h4>
            <button onClick={() => this.handleClick()}>Login</button>

                </div>
        )
    }

}

export default StateFullBtn ;
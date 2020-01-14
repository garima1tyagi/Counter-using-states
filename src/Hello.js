import React, { Component } from 'react'

class Hello extends Component {
    constructor(props) {
        super(props)
    }


render() {

    return (
        <div>
            <h3>Hello {this.props.name}</h3>
            <p>Welcome to the app. I am a statefull application</p>
            -------------------------------------------------------

            </div>

    )
}



}

export default Hello
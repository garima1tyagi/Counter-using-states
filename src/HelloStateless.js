import React, { Component } from 'react'

const HelloStateless = (props) => {
    const {name, info} = props
return(
    <div>
        <h3>I am a stateless Component {name} </h3>
        <p> I am working on a stateless function</p>
        <p> {info}</p>
 -------------------------------------------------------

        </div>
)


}

export default HelloStateless
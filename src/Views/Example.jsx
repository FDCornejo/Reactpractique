import React, { Component } from 'react';



export default class Example extends Component {
    state = {
        name: "Alfredo",
        age: 23
    };
    render() {
        return (
            <div>
                <h1>Name</h1>
                <h3>{this.state.name}</h3>
                <h1>Age</h1>
                <h3>{this.state.age}</h3>
            </div>
        );
    }
}

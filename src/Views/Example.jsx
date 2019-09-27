import React, { Component } from 'react';
import axios from 'axios';
const getBaseUrl="http://www.colr.org/json/color/random"


export default class Example extends Component {
  

        //state for characters value//
        state = {
            color : "2345"
        };
miFuncion(){
    axios
  .get(getBaseUrl)
  .then((response) => {
      alert(response.data.colors[0].hex)
    this.setState({color: response.data.colors[0].hex});
    //this.setState({name: response.data.name});
  })
}
    render() {
        return (
            <div>
                <button  onClick={this.miFuncion}>Button </button>
                <h1>Name</h1>
                <h3 style={{color:"#"+this.state.color}}>{this.state.color}</h3>

            </div>
        );
    }
}

import React, { Component } from 'react';
import axios from 'axios';
import Card from '../Components/Cards';
const getBaseUrl = "http://api.tvmaze.com/search/shows?q=";


export default class Example extends Component {
    state = {
        elements: [],
        texto: 'girls'
    };

    miFuncion = () => {
        var s = this.state.texto
        axios
            .get(getBaseUrl + s.split(''))
            .then((response) => {
                console.log(response.data)
                this.setState({ elements: response.data })
                this.setState({ name: response.data.name });
            })
    }

    handleChangeSearch = (e) => {
        this.setState({ texto: e.target.value });
    }


    render() {
        var item = this.state.elements.map((value, index) => {
            return (
                <Card key={value.show.id} info={value}></Card>
            )
        });
        return (

            <div>
                <h1>Search a Serial</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">
                                        <i className="material-icons">
                                            tv</i>
                                    </span>
                                </div>
                                <input onChange={this.handleChangeSearch} type="text" className="form-control" placeholder="Try with Naruto" aria-label="Username" aria-describedby="inputGroup-sizing-lg" />
                                <button className="btn btn-primary" onClick={this.miFuncion}>
                                    <i className="material-icons">search</i>
                                </button>
                            </div>

                        </div>
                   
                    </div>
                    <div className="row">
                            {item}

                        </div>
                </div>



            </div>
        );

    }

};

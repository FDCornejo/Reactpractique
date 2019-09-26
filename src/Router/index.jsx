import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Parent from '../Views/Example';
import App from '../App';


export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" to="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link style={{ margin: 5 }} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ margin: 5 }} to="/props-example">Props Example</Link>

                            </li>
                        </ul>

                    </div>



                </nav>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/props-example" component={Parent} />

                </Switch>
            </Router>
        );
    }
}

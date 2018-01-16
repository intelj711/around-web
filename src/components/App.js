import React, { Component } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import '../styles/App.css';
import {TOKEN_KEY} from '../constants';

class App extends Component {
    state = {
        isLoggedIn: !!localStorage.getItem(TOKEN_KEY),
    }


    loginHandler = (token) => {
        this.setState({ isLoggedIn: true });
        localStorage.setItem(TOKEN_KEY, token);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Main isLoggedIn={this.state.isLoggedIn} loginHandler = {this.loginHandler}/>
            </div>
        );
    }
}

export default App;
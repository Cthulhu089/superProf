import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { simpleAction } from "./actions/simpleAction";
import { connect } from "react-redux";
import subtotalSelector from './selectors/simpleSelector'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('state', this.props,);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            onClick={() => {
              this.props.simpleAction();
            }}
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

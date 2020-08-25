import React from 'react';
import './App.css';
import { getLaunch } from './action/actions';
import { connect } from 'react-redux';

function App(props) {


  return (
    <div className="App">
     <h1>Space X latest launch</h1>
      <button onClick={props.getLaunch}>LIFTOFF!!</button>
    </div>
  );
}

const stateToProps = state => {
  return {}
}

const dispatchToProps = { getLaunch } 
export default connect(stateToProps,dispatchToProps)(App);

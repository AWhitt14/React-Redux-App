import React from 'react';
import './App.css';
import { getLaunch } from './action/actions';
import { connect } from 'react-redux';
import LaunchPad from './Comp/launchPad';

function App(props) {


  return (
    <div className="App">
     <h1>Space X latest launch</h1>
      <LaunchPad />
    </div>
  );
}

const stateToProps = state => {
  return {}
}

const dispatchToProps = { getLaunch } 
export default connect(stateToProps,dispatchToProps)(App);

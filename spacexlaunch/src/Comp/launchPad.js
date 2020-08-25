import { connect } from 'react-redux';
import { getLaunch } from '../action/actions';
import React from 'react';

const LaunchPad = (props) => {
    if (props.other.padOn === true){
        return (
            <div>
                <img src={props.other.img} alt='launch patch'/>
                <h2>{props.launchInfo.name}</h2>
            </div>
        )
    } 
    else {
        return(
            <>
            <button onClick={props.getLaunch}>LIFTOFF!!</button>
            </>
        )
    }
    
}

const stateToProps = (state) => {
    return {
        launchInfo: state.launchInfo,
        other: state,
    }
}
const dispatchTpProps = { getLaunch }
export default connect(stateToProps,dispatchTpProps)(LaunchPad);
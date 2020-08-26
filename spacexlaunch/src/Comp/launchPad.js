import { connect } from 'react-redux';
import { getLaunch } from '../action/actions';
import React from 'react';
import space from './giphy.gif';
import '../App.css';

const LaunchPad = (props) => {

    if (props.other.padOn === true){
        return (
            <div>
                <img src={props.other.img} alt='launch patch'/>
                <h2>{props.launchInfo.name}</h2>
                <p>{props.launchInfo.details}</p>
                <a href={props.launchInfo.links.article}>click here to view article</a>
            </div>
        )
    } 
    else if ( props.other.loading === true){
        return(
            <div>
                <p>Loading...</p>
                <img className='loading' src={space} alt='loading...'/>
            </div>
        )
    }

    else{
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
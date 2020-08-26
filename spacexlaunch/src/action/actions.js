import axios from 'axios';



export const getLaunch = () => dispatch => {
    dispatch({type: "FETCHING_LAUNCH"});
    axios.get('https://api.spacexdata.com/v4/launches/latest')
        .then(res => {
            dispatch({type: 'FETCHING_SUCCESS', payload: res.data})
            //console.log(res);
        })
        .catch(er => {
            dispatch({type: 'FETCHING_FAIL', payload: er.response.message})
            //console.log(er);
        });
}
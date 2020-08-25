
const initialState = {
    launchInfo: {},
    padOn: false,
    loading: false,
};


export const spaceReducer = (state = initialState, action) => {
    switch (action.type){
    case "FETCHING_LAUNCH":
        return state;
    case "FETCHING_SUCCESS":
        console.log(action.payload);
        return {...state, launchInfo: action.payload}
    default:
        return state;
    
    
    
    
    }
}
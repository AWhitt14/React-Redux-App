
const initialState = {
    launchInfo: {},
    img: '',
    padOn: false,
    loading: false,

};


export const spaceReducer = (state = initialState, action) => {
    switch (action.type){
    case "FETCHING_LAUNCH":
        return {...state, loading: true};
    case "FETCHING_SUCCESS":
        console.log(action.payload);
        return {...state, launchInfo: action.payload, loading: false, padOn: true, img: action.payload.links.patch.small}
    case 'FETCHING_FAIL':
        return {...state, loading: false,}
    default:
        return state;
    
    
    
    
    }
}
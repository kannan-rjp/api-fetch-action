import *as actiontypes from "../actions/actionType"

const initialState = {
    userinfo:{},
    isError:false
}



const particularreducer = ( state = initialState, action={}) => {
//console.log(state,'This is state');
//console.log(action,'This is action')
    const newState = {...state}

    switch(action.type){
        
        case actiontypes.GET_PART_USER:
            
            return {...newState, userinfo: {...action.payload}};
         
   
        default:
            return{...newState};
    }

}

export default particularreducer;

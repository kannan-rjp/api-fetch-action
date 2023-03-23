import *as actiontypes from "../actions/actionType"

const initialState = {
    userpost:{},
    isError:false
}



const userreducer = ( state = {initialState}, action={}) => {
//console.log(state,'This is state');
//console.log(action,'This is action')
    const newState = {...state}
    //console.log(newState,'THis is from newState')
    //console.log(newState,'heading in userreducer reducer')
    switch(action.type){
        case actiontypes.USER_INFORMATION:
            return {...newState};
            //return (action.payload,'action payload for delete..')
        case actiontypes.USER_INFORMATION_SUCCESS:
            //console.log(newState,'checking post ')
            return {...newState, userpost : {...action.payload}};
        case actiontypes.USER_INFORMATION_ERROR:
            return {...newState, userpost : {...newState.details},isError:true};
        
        case actiontypes.DELETE_USER_POST:
            //return {...newState, userpost: {}}    
            return (action.payload,'action payload for delete..')
            //return {...newState,userpost:{data:[...newState.userpost?.data.filter(getId => getId.id !== action.payload)]}};

        // case actiontypes.UPDATE_USER_POST:
        //     return 
        default:
            return{...newState};
    }

}

export default userreducer;

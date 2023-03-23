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
            // return (action.payload,'action payload for delete..')
             return {...newState,userpost:{data:[...newState?.userpost?.data.filter(item=>(item.id!==action.payload?.deleteid))]}}

        case actiontypes.UPDATE_USER_POST:
            return{
                ...newState,userpost:{data:[...newState?.userpost?.data.map(item=>
                    item.id==action.payload?.id
                    ?{...item,
                    title:action.payload?.title,
                    body:action.payload?.body
                    }
                    :item
                    )]}
            }
        case actiontypes.ADD_USER_POST:
            // (console.log(newState,'this from final post data in reducer'))
            if(action.payload?.userId == 3){
                return{
                    ...newState,userpost:{data:[...newState?.userpost?.data.concat({...action.payload})]}
                }
            }
            
        default:
            return{...newState};
    }

}

export default userreducer;

import axios from "axios"
import *as actiontypes from "./actionType"

const request = axios.create({
    headers:{
        
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
    },
});


const getParticularPost = (mail)=>{
    
    console.log('Yeah! I am here... status from post section')
    return(dispatch)=>{
        dispatch({
            type:actiontypes.USER_INFORMATION
        });

        request({
            method: 'get',
            url:`https://jsonplaceholder.typicode.com/posts?userId=3`,
            
            
        })

        .then((response)=>{
            //console.log(cur_email,'from response email');
                //console.log(response,"this response from post section data")
                //here value wont come
            dispatch({
                type:actiontypes.USER_INFORMATION_SUCCESS,
                payload: response
            });
           })
    
           .catch((error)=>{
            dispatch({
                type:actiontypes.USER_INFORMATION_ERROR,
                payload: error
            });
           })

    }
}

export default getParticularPost;


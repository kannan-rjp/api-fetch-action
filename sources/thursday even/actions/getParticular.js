import axios from "axios"

import *as actiontypes from "./actionType"


const request = axios.create({
    headers:{
        
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        
    },
});

const getParticularUser= (mail)=>{
    console.log(mail,'from particular email status');
    const cur_email = mail;
    //console.log('Yeah! I am here... status from user section')

    return(dispatch)=>{
        dispatch({
            type:actiontypes.GET_PART_USER
        });

        request({
            method:"get",
            url:`https://jsonplaceholder.typicode.com/users/3`
        })

        .then((response)=>{
            //console.log(response)
            if(cur_email==response.data.email){
                //console.log('true')
                dispatch({
                    type:actiontypes.GET_PART_USER,
                    payload: response
                });
            }
            
            
        })

    }
}

export default getParticularUser;
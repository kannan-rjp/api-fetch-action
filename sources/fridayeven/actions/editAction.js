import axios from "axios";
import *as actiontypes from './actionType';

const request = axios.create({
    headers:{
        
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        
    },
});

const editAction = (editData)=>{
   console.log(editData,'edit data received...')
    return(dispatch)=>{

        dispatch({
            type:actiontypes.UPDATE_USER_POST
        });
    {fetch(`https://jsonplaceholder.typicode.com/posts`+`/`+editData.poppostid, {
        method: 'PUT',
        body: JSON.stringify({
          id: editData.poppostid,
          title: editData.edittitle,
          body: editData.editbody,
          userId: editData.popuserid,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) =>  dispatch({
            type:actiontypes.UPDATE_USER_POST,
            payload: json
        }))}

    }

       
    }

export default editAction;
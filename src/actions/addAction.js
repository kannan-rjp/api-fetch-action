import React from 'react'
import axios from "axios";
import *as actiontypes from './actionType';

const addAction = (addData)=> {
    const requestContent = {
        method: 'POST',
        body: JSON.stringify({
        userId: 3,
        id: addData.setNewId,
        title: addData.addtitle,
        body: addData.addbody,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        }
        return (dispatch)=>{
            //console.log(addData,'user add post here...vada mavane')
            dispatch({
                type: actiontypes.ADD_USER_POST
            });
            {fetch(`https://jsonplaceholder.typicode.com/posts`, requestContent )
            .then((response) => response.json())
            .then((json) =>  dispatch({
                type: actiontypes.ADD_USER_POST,
                payload: json
            }))
    }

        }
}
export default addAction;

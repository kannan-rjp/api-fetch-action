import axios from "axios";
import *as actiontypes from './actionType';



const addPost = (editData)=>{
  const requestContent = {
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
      }
  
  return (dispatch)=>{
    console.log(`https://jsonplaceholder.typicode.com/posts`+`/`+editData.poppostid,'this is a put recent request')
    
    dispatch({
        type: actiontypes.UPDATE_USER_POST
    });
    // {axios.put(`https://jsonplaceholder.typicode.com/posts`+`/`+editData.poppostid, requestContent )

    {fetch(`https://jsonplaceholder.typicode.com/posts`+`/`+editData.poppostid, requestContent )
            .then((response) => response.json())
            .then((json) =>  dispatch({
                type: actiontypes.UPDATE_USER_POST,
                payload: json
            }))
    }
  }
   
            
  }
    

export default addPost;
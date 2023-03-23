import *as actiontypes from "./actionType"

function deleteUserPost(userpost_id) {
    console.log(userpost_id,'this id for delete the particular')
    return({
        type: actiontypes.DELETE_USER_POST,
        payload: userpost_id
    });
}

export default deleteUserPost;

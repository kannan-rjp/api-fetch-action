import *as actiontypes from "./actionType"

function deleteUserPost(deleteid) {
         console.log(deleteid,'this id for delete the particular')
    return({
        type:actiontypes.DELETE_USER_POST,
        payload: deleteid
    });
}
export default deleteUserPost;

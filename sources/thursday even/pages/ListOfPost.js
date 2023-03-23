import React,{Fragment, useEffect,useState} from 'react'
import '../App.css'

import { connect } from 'react-redux'
import getParticularPost from '../actions/getParticularPost'
import { bindActionCreators } from 'redux'

import deleteUserPost from '../actions/deleteUserPost'

const ListOfPost = ({fetchUserPost,userpost,deletepost_req})=> {
  // console.log(userpost?.data?.title,'this from post title')
  useEffect(()=>{
    fetchUserPost();
    console.log('####################');
    console.log(userpost);
    console.log('####################');
  },[]);
  
  return (
    <Fragment>
    {userpost?.data && <div><h3>List Of Posts</h3>
    <table className='table-contents'>
      <tr>
        <th>Sno</th>
        <th>Id</th>
        <th>Title</th>
        <th>Post</th>
        <th>Actions</th>
        <th>Actions</th>
        <th>Actions</th>
      </tr>
      {userpost?.data.map((item,index) => (<tr>
        <td>{index+1}</td>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td>
          <button className='act'>Edit</button>
        </td>
        <td>
          <button className='act'>Update</button>
        </td>
        <td>
          <button className='act' onClick={()=> deleteUserPost(item.id)} >Delete</button>
        </td>
      </tr>))}
    </table>
    </div>}
    </Fragment>

  );
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
  //return {  
    fetchUserPost : getParticularPost,
    deleteUserPost
    //fetchUserPost: ()=> dispatch(getParticularPost()),
    //deletepost_req: (userpost_id)=> dispatch(deleteUserPost(userpost_id))

  },dispatch);
} 
const mapStateToProps = (state) =>({
  userpost: state.userreducer.userpost,
  //userinfo: state.particularreducer.userinfo
});
export default connect(mapStateToProps,mapDispatchToProps)(ListOfPost);

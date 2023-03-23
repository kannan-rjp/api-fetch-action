import React,{Fragment, useEffect,useState} from 'react'
import '../App.css'

import { connect } from 'react-redux'
import getParticularPost from '../actions/getParticularPost'
import { bindActionCreators } from 'redux'

import deleteUserPost from '../actions/deleteUserPost'
import editAction from '../actions/editAction'

import EditIcon from '@mui/icons-material/Edit';
import ViewIcon from '@mui/icons-material/Visibility';
import Modal from '@mui/material/Modal';

import { Link } from 'react-router-dom'

const ListOfPost = ({fetchUserPost,userpost,deletepost_req})=> {
  //for pop up model design form
  const [popuserid, setUserid] = useState("");
  const [poppostid, serPostid] = useState("");
  const [poptitle, setTitle] = useState("");
  const [popbody, setBody] = useState("");
  const [edittitle, setEtitle] = useState("");//console.log(edittitle,'edit title')
  const [editbody, setEbody] = useState("");//console.log(editbody,'edit body')
  const [popopen, setOpen] = useState(false);
  const openModel = ()=> {
    setOpen(true)
  }
  const updatePost = ()=>{
    const editData = {popuserid,poppostid,edittitle,editbody};
    //console.log(editData,'edit data here..')
    editAction(editData);
  }
  const handleClose = ()=>{
    setOpen(false)
  }
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
      <tr className='table-head'>
        <th>Sno</th>
        <th>UserId</th>
        <th>Id</th>
        <th>Title</th>
        <th>Post</th>
        <th>View</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {userpost?.data.map((item,index) => (<tr>
        <td>{index+1}</td>
        <td>{item.userId}</td>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td>
          <Link to='view' state={{post_title: item.title,post_body: item.body}}><ViewIcon  /></Link>
        </td>
        <td>
          <EditIcon onClick={()=>openModel(setUserid(item.userId),serPostid(item.id),setTitle(item.title),setBody(item.body))} />
        </td>
        <td>
          <button className='act' onClick={()=> deleteUserPost(item.id)} >Delete</button>
        </td>
      </tr>))}
    </table>
    </div>}

    <Modal
      open={popopen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="pop-up-form"
    >
      <div className='popupform-section'>
        <div className='popuphead'>
            <h2>Update Post Here...</h2>
        </div>
        <div className='popuptitle'>
          <label>Title</label>
          <textarea className='title-area' defaultValue={poptitle} onChange={(e)=>(setEtitle(e.target.value))}></textarea>
        </div>
        <div className='popupbody'>
          <label>Body</label>
          <textarea className='body-area' defaultValue={popbody} onChange={(e)=>(setEbody(e.target.value))}></textarea>
        </div>
        <div className='popupbutton'>
          <button className='input_submit for-padd' onClick={updatePost}>Update</button>
        </div>
      </div>
    </Modal>
    </Fragment>

  );
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
  //return {  
    fetchUserPost : getParticularPost,
    deleteUserPost,
    editAction
    //fetchUserPost: ()=> dispatch(getParticularPost()),
    //deletepost_req: (userpost_id)=> dispatch(deleteUserPost(userpost_id))

  },dispatch);
} 
const mapStateToProps = (state) =>({
  userpost: state.userreducer.userpost,
  //userinfo: state.particularreducer.userinfo
});
export default connect(mapStateToProps,mapDispatchToProps)(ListOfPost);

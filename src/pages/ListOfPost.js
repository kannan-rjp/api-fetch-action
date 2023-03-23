import React,{Fragment, useEffect,useState} from 'react'
import '../App.css'
import AppPagination from '../components/Pagination'

import { connect } from 'react-redux'
import getParticularPost from '../actions/getParticularPost'
import { bindActionCreators } from 'redux'

import deleteUserPost from '../actions/deleteUserPost'
import editAction from '../actions/editAction'
import addAction from '../actions/addAction'



import EditIcon from '@mui/icons-material/Edit';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AddIcon from '@mui/icons-material/Add';
import ViewIcon from '@mui/icons-material/Visibility';
import Modal from '@mui/material/Modal';
import { Avatar, Button, CircularProgress, Grid } from '@mui/material'

import { Link } from 'react-router-dom'
import axios from 'axios'
// import Logicspage from '../logicspage'

const ListOfPost = ({fetchUserPost,userpost,editAction,addAction,deleteUserPost})=> {
  //for pop up model design form-update
  const [popuserid, setUserid] = useState();
  const [poppostid, setPostid] = useState();
  const [poptitle, setTitle] = useState();console.log(poptitle,'pop title message')
  const [popbody, setBody] = useState();console.log(popbody,'pop body message')
  //const [edittitle, setEtitle] = useState();//console.log(edittitle,'edit title')
  //const [editbody, setEbody] = useState();//console.log(editbody,'edit body')
  const [popopen, setOpen] = useState(false);
  
  const openModel = ()=> {
    setOpen(true)
  }
  const handleClose = ()=>(setOpen(false),setAddOpen(false))
  //useEffect(()=>{console.log('first time enters into new effect')},[openModel]);
  const updatePost = ()=>{
    const editData = {popuserid,poppostid,poptitle,popbody};
    console.log(editData,'edit data here..')
    editAction(editData);
    setOpen(false);
   
  }
  //for pop up model design form-add
  const [addtitle, setAddTitle] = useState('');console.log(addtitle,'#$$$#$#%#%')
  const [addbody, setAddBody] = useState('');console.log(addbody,'#####@@@@@@')
  const [addPopOpen, setAddOpen] = useState(false);
  // const addModel = ()=> {
  //   setAddOpen(true);
  // }
  // const addPopClose = ()=> {
  //   setAddOpen(false);
  // }
  // useEffect(()=>{
  //   //console.log(userpost.data[userpost.data.length-1],'this array userpost data..')
  // },[userpost]);
  const addPost = ()=>{
     const setArr = userpost?.data?.[userpost.data.length-1];
     const setNewId = setArr.id+1;
     const addData = {setNewId,addtitle,addbody};
     //console.log(addData)
     addAction(addData);
     setAddOpen(false);
    
  }
  // console.log(userpost?.data?.title,'this from post title')
  // const ren_userpost = userpost?.data;
  useEffect(()=>{
    fetchUserPost();
    //  console.log('####################');
    //  console.log(userpost,'@@@@@@@#########$$$$$$$$$$$$');
    //  console.log('####################');
  },[]);
  
  return (
    <Fragment>
    {(userpost?.data)? <div><Grid container sx={{backgroundColor:'#FFB6C1',padding:'10px'}}>
      <Grid xs={6} md={6}>
        <Grid md={6}
        display='flex'
        alignContent='center'>
          <DehazeIcon />
        </Grid>
      </Grid>
      <Grid xs={6} md={6} display='flex' justifyContent='flex-end'>
        <Grid md={4} display='flex' justifyContent='flex-end'>
          <Button
          sx={{color:'#000'}}
          onClick={()=>(setAddOpen(true))}
          endIcon={<AddIcon sx={{Color:'#fff'}} />}
          >Add</Button>
        </Grid>
        <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
          <Avatar sx={{backgroundColor:'#e189b9'}}>N</Avatar>
        </Grid>
      </Grid>
    </Grid>
    
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
          <EditIcon onClick={()=>openModel(setUserid(item.userId),setPostid(item.id),setTitle(item.title),setBody(item.body))} />
        </td>
        <td>
          <button className='act' onClick={()=>(deleteUserPost({deleteid:item.id}))} >Delete</button>
        </td>
      </tr>))}
    </table>
    <div><AppPagination /></div>
    </div>:<CircularProgress 
      sx={{
        mt: '50vh',
        ml: '100vh'
      }}
    />}

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
          <textarea className='title-area' defaultValue={poptitle} onChange={(e)=>(setTitle(e.target.value))}></textarea>
        </div>
        <div className='popupbody'>
          <label>Body</label>
          <textarea className='body-area' defaultValue={popbody} onChange={(e)=>(setBody(e.target.value))}></textarea>
        </div>
        <div className='popupbutton'>
          <button className='input_submit for-padd' onClick={updatePost}>Update</button>
        </div>
      </div>
    </Modal>

    {/* add post pop up form here... */}
    <Modal
      open={addPopOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="pop-up-form"
    >
      <div className='popupform-section'>
        <div className='popuphead'>
            <h2>Add Post Here...</h2>
        </div>
        <div className='popuptitle'>
          <label>Title</label>
          <textarea className='title-area' onChange={(e)=>(setAddTitle(e.target.value))}></textarea>
        </div>
        <div className='popupbody'>
          <label>Body</label>
          <textarea className='body-area' onChange={(e)=>(setAddBody(e.target.value))}></textarea>
        </div>
        <div className='popupbutton'>
          <button className='input_submit for-padd' onClick={addPost}>Add Post</button>
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
    editAction,
    addAction
    //addPost
    //fetchUserPost: ()=> dispatch(getParticularPost()),
    //deletepost_req: (userpost_id)=> dispatch(deleteUserPost(userpost_id))

  },dispatch);
} 
const mapStateToProps = (state) =>({
  userpost: state.userreducer.userpost,
  //userinfo: state.particularreducer.userinfo
});
export default connect(mapStateToProps,mapDispatchToProps)(ListOfPost);

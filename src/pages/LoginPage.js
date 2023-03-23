import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getParticularUser from '../actions/getParticular';
import getParticularPost from '../actions/getParticularPost';

import Logo from '../assets/logoone.png';
import {Link, useNavigate } from 'react-router-dom';

const  LoginPage = ({getparticularuser,userinfo})=> {
    const navigate = useNavigate();

    const api_mail = userinfo?.data?.email;
    const[email, setEmail] = useState('');
    
    useEffect(()=>{
        console.log(userinfo,'*********effecthook')
        if(userinfo?.status==200){
            navigate("/posts")
        }
    },[userinfo]);
    // useEffect(()=>{
    //     // (userinfo?.data?.email==email)?(<ListOfPosts />):(<></>)
    //     console.log("****************")
    //         if(userinfo?.data?.email==email){
    //             return <ListOfPosts />
    //         }
    //     // console.log(userinfo);
    //     // console.log("****************")
    // },[userinfo]);
    // if(userinfo?.data?.email){
    //     return <ListOfPosts email={userinfo?.data?.email} userId={userinfo?.data?.id} />
    // }
    
  //console.log(email);
  return (
    <div className="disp_con">
        <div className="main_container">
        
        <div className="body_container">
            <div className="for_title">
            <h1 className="headone">Sign in</h1>
            </div>
            <div className="for_input">
            <label className="label_email">Email</label>
            <input className="input_email" type='email' onChange={(e)=>(setEmail(e.target.value))}></input>
            </div>
            <div className="for_input">
            <label className="label_email">Password</label>
            <input className="input_email" type='email'></input>
            </div>
            <div className="for_submit">
            <div>
                <button className='input_submit' onClick={() => getparticularuser(email)}>Login</button>
            </div>
            <div><p className="legal_info">By continuing, you agree to According to Digital <span className="span_color">Conditions of Use</span> and <span className="span_color">Privacy Notice.</span></p>
                <p className="legal_info">Use this email...Nathan@yesenia.net</p>
            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}
const mapStateToProps = (state) =>({
    //userpost: state.userreducer.userpost,
    userinfo: state.particularreducer.userinfo
});
const mapDispatchToProps = (dispatch) =>{
    return{
        //fetchUserDetails: (email)=> dispatch(getParticularPost(email)),
        getparticularuser: (email)=>dispatch(getParticularUser(email))
    };
};
LoginPage.prototype = {
    //fetchUserDetails:PropTypes.func.isRequired,
    getoneuser:PropTypes.func.isRequired,
    //userpost: PropTypes.objectOf(PropTypes.object),
    userinfo: PropTypes.objectOf(PropTypes.object),
}
export default connect(mapStateToProps,mapDispatchToProps) (LoginPage);

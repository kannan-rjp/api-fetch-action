import React from 'react'
import '../App.css'
import {Link,useLocation} from 'react-router-dom'

export default function ViewPerPost() {
    const location = useLocation();
    console.log(location);
  return (
    <div className='post-content'>
      <div>
        <h2 className='post-content-h2'>Post...</h2>
      </div>
      
        <div className='post-content-body'>
          <h3 className='post-content-h3'>{location.state.post_title}</h3>
      
          <h5 className='post-content-h5'>{location.state.post_body}</h5>
        </div>
      
      <div className='post-content-button'>
        <button className='input_submit'><Link className='text-deco' to='/posts'>Back</Link></button>
      </div>
    </div>
  )
}

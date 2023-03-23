import React from 'react'
import '../App.css'
import {Link,useLocation} from 'react-router-dom'

import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

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
        {/* <Button variant="contained"><Link className='text-deco' to='/posts'>Back</Link></Button> */}
        <Grid container>
          <Grid sx={{padding:'10px'}} xs={12} md={6}>
            <Button variant="contained"><Link className='text-deco' to='/posts'>Comments</Link></Button>
          </Grid>
          <Grid sx={{padding:'10px'}} xs={12} md={6}>
            <Button variant="contained"><Link className='text-deco' to='/posts'>Back</Link></Button>
          </Grid>
        </Grid>
      </div>
    </div>
    
  )
}

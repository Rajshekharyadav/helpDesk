import React from 'react'
import {Container} from "@mui/material"
import { Grid, Typography, TextField, Button, Link ,Checkbox, FormControlLabel} from '@mui/material';







const Register = () => {
      
  return (
    <div className='AContainer'>
    <div className='CAccount'>
        <h2 align="center">Create Acount</h2>
        <div className='AField'>
            
            <Grid item xs={12} md={6}>
            <h3>Name</h3>
            <TextField label="Name" type="Name" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
            <h3>Email</h3>
            <TextField label="Email" type="email" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
            <h3>Password</h3>
            <TextField label="Password" type="password" fullWidth />
            </Grid>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
            <Grid item xs={12} className='signButton'>
            <Button variant="contained" fullWidth>
                Sign Up
            </Button>
            </Grid>
            <Grid item xs={12} align="cent">
              <Link href="/login" variant="body2" align='center'>
                 <p>Already have an account? Login </p>
                </Link>
            </Grid>
    


        </div>

    </div>
    </div>


  )
}

export default Register
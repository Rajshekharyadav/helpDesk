import React from 'react'
import { Grid, Typography, TextField, Button, Link ,Checkbox, FormControlLabel} from '@mui/material';







const SignIn = () => {
      
  return (
    <div className='AContainer'>
    <div className='CAccount'>
        <h2 align="center">Login to your account</h2>
        <div className='AField'>
            
            <Grid item xs={12} md={6}>
            <h3>Email</h3>
            <TextField label="Email" type="email" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
            <h3>Password</h3>
            <TextField label="Password" type="password" fullWidth />
            </Grid>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
            <Grid item xs={12} className='signButton'>
            <Button variant="contained" fullWidth>
                Sign Up
            </Button>
            </Grid>
            <Grid item xs={12} align="center">
              <Link href="/login" variant="body2" >
                 <p>New to MyApp? Sign Up</p>
                </Link>
            </Grid>
    


        </div>

    </div>
    </div>


  )
}

export default SignIn
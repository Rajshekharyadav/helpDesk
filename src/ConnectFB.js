import React from 'react'
import { Grid, Typography, TextField, Button, Link ,Checkbox, FormControlLabel} from '@mui/material';







const ConnectFB = () => {
      
  return (
    <div className='AContainer'>
    <div className='CAccount'>
        <h2 align="center">Facebook Page Integration</h2>
        <div className='AField'>
            
            <Grid item xs={12} className='signButton'>
            <Button variant="contained" fullWidth>
                Connect Page
            </Button>
            </Grid>
            
    


        </div>

    </div>
    </div>


  )
}

export default ConnectFB
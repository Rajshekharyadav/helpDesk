import React from 'react'
import { Grid, Typography, TextField, Button, Link ,Checkbox, FormControlLabel} from '@mui/material';







const DisconnetPage = () => {
      
  return (
    <div className='AContainer'>
    <div className='CAccount'>
        <h2 align="center">Facebook Page Integration</h2>
        
        <h2 align="Center">Integrated Page: <strong>Amazon Business</strong></h2>
        <div className='AField'>
            
            <Grid item xs={12} className='signButton'>
            <Button variant="contained" fullWidth color="error">
                Delete Integration
            </Button>
            </Grid>
            <br/>
            <Grid item xs={12} className='signButton'>
            <Button variant="contained" fullWidth>
                Reply To Messages
            </Button>
            </Grid>
            
    


        </div>

    </div>
    </div>


  )
}

export default DisconnetPage
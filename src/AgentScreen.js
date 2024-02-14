import { Checkbox, FormControlLabel, Button, TextField } from '@mui/material'
import React from 'react'


const AgentScreen = () => {
  return (
    <div className='mainScreen'>
        <div className='sideNav'>
            <div className='sideLogo'><p align="center"><i class="fa-solid fa-earth-americas"></i> </p></div>
            <div className='sideMail sideNavActive'> <p align="center"><i class="fa-solid fa-inbox"></i> </p></div>
            <div className='sideConnect'> <p align="center"><i class="fa-solid fa-users"></i> </p></div>
            <div className='sideDas'> <p align="center"><i class="fa-solid fa-chart-line"></i> </p></div>
        </div>
        <div className='conversations'>
            <div className="conHead">
                <div className='navLogo'><i class="fa-solid fa-bars"></i></div> <div className='navTitle'> Conversations</div> <div className='navRefresh'><i class="fa-solid fa-arrows-rotate"></i></div>
            </div>
            <div className='people peopleActive'>
                <div className='Name'>
                    <div className='nameCheck'>
                    <FormControlLabel control={<Checkbox />} />
                    </div>
                    <div className='fullName'>
                        <p><strong>Amit RG </strong><br/>
                        Facebook DM </p>
                    </div>
                    <div className='time'>
                        10m
                    </div>
                </div>
                <div className='NameDes'>
                <p><strong>Awesome Product </strong><br/>
                        Hey There! i probably did one of the.. </p>
                </div>

            </div>
            <div className='people'>
                <div className='Name'>
                    <div className='nameCheck'>
                    <FormControlLabel control={<Checkbox />} />
                    </div>
                    <div className='fullName'>
                        <p><strong>Amit RG </strong><br/>
                        Facebook DM </p>
                    </div>
                    <div className='time'>
                        10m
                    </div>
                </div>
                <div className='NameDes'>
                <p><strong>Awesome Product </strong><br/>
                        Hey There! i probably did one of the.. </p>
                </div>

            </div>


            

        </div>
        <div className='chatScreen'>
            <div className="chatHead">
                <p> Amit RG</p>
            </div>
            <div className="message">
                {/* <p> Amit RG</p> */}
                <div className='writeMessage'>
                <TextField fullWidth label="Message Hiten Sacena" id="fullWidth" />
                </div>
            </div>
        </div>
        <div className="customerDetails">
            <div className='cusProfile'>
                <img src='profile.jpg' id="profile"/>
                <h2 align="center">Amit RG</h2>
                <p align="center"><i class="fa-solid fa-circle"></i> Offline </p>
                <div className='proButton'>
                    <Button variant="outlined"><i class="fa-solid fa-phone"></i>  Call</Button>
                    <Button variant="outlined"><i class="fa-solid fa-phone"></i>  Profile</Button>
                </div>
            </div>
            <div className='cusDetails'>
                <h2>Customer Details</h2>
                <div className='cusPerInfo'>
                    <div className='leftInfo'>
                        <p>Email</p>
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p><a href='#'>View more Details</a></p>
                    </div>
                    <div className='rightInfo'>
                        <p align="right">amit@richpanel.com</p>
                        <p align="right">Amit</p>
                        <p align="right">RG</p>
                    </div>

                </div>
            
            </div>
        </div>
    </div>
  )
}

export default AgentScreen
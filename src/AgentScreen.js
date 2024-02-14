import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

const AgentScreen = () => {
  return (
    <div className='mainScreen'>
        <div className='sideNav'></div>
        <div className='conversations'>
            <div className="conHead">
                <div className='navLogo'>⚡</div> <div className='navTitle'> Conversations</div> <div className='navRefresh'>☠️</div>
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
        <div className='chatScreen'></div>
            {/* <div className="chatHead">
                <p> Amit RG</p>
            </div>
            <div className="message">
                <p> Amit RG</p>
            </div> */}
        <div className="customerDetails"></div>
    </div>
  )
}

export default AgentScreen
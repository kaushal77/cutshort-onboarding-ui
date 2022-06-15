import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function PersonalInfo() {
  return (
    <div>
        <Typography variant="h5" style={{fontWeight:'550',fontFamily:'Inter'}}>Welcome! First things first...</Typography>
        <small>You can always change them later</small>
        <br/><br/>
        <div style={{width:'80%'}}>
        
        <Typography variant="caption" align="left" style={{display:'flex'}} >First Name</Typography>
        <input type="text" style={{width:'100%',padding:'5px 4px',borderColor:'lightgrey !important'}} />
        <br/>
        <Typography variant="caption" align="left" style={{display:'flex'}} >Last Name</Typography>
        <input type="text" style={{width:'100%',padding:'5px 4px',borderColor:'lightgrey !important'}} />

            {/* <label>First Name</label>
            <input /> */}
        </div>
        <br />
    </div>
  )
}

export default PersonalInfo
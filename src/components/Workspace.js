import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function Workspace() {
  return (
    <div>
        <Typography variant="h5" style={{fontWeight:'550',fontFamily:'Inter'}}>Let set up a home for all your work </Typography>
        <small>You can always create another workspace later</small>
        <br/><br/>
        <div style={{width:'80%'}}>
        
        <Typography variant="caption" align="left" style={{display:'flex'}} >Workspace Name</Typography>
        <input type="text" id= "workspacename" style={{width:'100%',padding:'5px 4px',borderColor:'lightgrey !important'}} />
        <br/>
        <Typography variant="caption" align="left" style={{display:'flex'}} >Workspace URL (optional)</Typography>
        {/* <input type="url" style={{width:'100%',padding:'5px 4px',borderColor:'lightgrey !important'}} /> */}
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3" style={{fontSize:'12px'}}>www.eden.com/</span>
            </div>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" style={{padding:'5px 4px',borderColor:'lightgrey !important'}} placeholder="Example" />
        </div>

            {/* <label>First Name</label>
            <input /> */}
        </div>
        <br />
    </div>
  )
}

export default Workspace
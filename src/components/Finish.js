import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
    root:{
        border:'1px solid rgb(102,77,229)',
        width:'50px', 
        borderRadius:'25px',
        height:'50px',
        backgroundColor:'rgb(102,77,229)',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'auto',
        marginBottom:'5%'
    }
  });

function Finish() {
    const classes = useStyles();
    

  return (
    <div>
        <div className={classes.root} ><DoneIcon fontSize='small' /></div>
        <Typography variant="h5" style={{fontWeight:'550',fontFamily:'Inter'}}>Congratulations, Eren!</Typography>
        <small>You have completed onboarding, you can start using the Eden! </small>
        <br/>
        <br />
    </div>
  )
}

export default Finish
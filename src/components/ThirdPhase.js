import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ProfileCard from './ProfileCard';

function ThirdPhase() {
  return (
    <div>
        <Typography variant="h5" style={{fontWeight:'550',fontFamily:'Inter'}}>How are you planning to use Eden ? </Typography>
        <small>We'll streamline your setup experience accordingly </small>
        <br/><br/>
        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <ProfileCard title="For myself" detail ="Write better. Think more clearly. Stay organized." icon="single" />
            <ProfileCard title="With my team" detail ="Wikis, docs, tasks, projects, all in one place." icon="group" />
        </div>
        <br />
    </div>
  )
}

export default ThirdPhase
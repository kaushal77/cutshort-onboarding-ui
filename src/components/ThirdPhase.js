import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ProfileCard from './ProfileCard';

export default function ThirdPhase() {
  const [activeCard, setActiveCard] = useState(false);

  const handlefocus=()=>{
    setActiveCard(!activeCard);
  }
  return (
    <div>
        <Typography variant="h5" style={{fontWeight:'550',fontFamily:'Inter'}}>How are you planning to use Eden ? </Typography>
        <small>We'll streamline your setup experience accordingly </small>
        <br/><br/>
        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'auto'}}>
            <span style={{border: activeCard ? '1px solid pink !important' :'initial !important'}} >
            <ProfileCard style={{borderColor:'blue'}} onclick={handlefocus} key="1" title="For myself" 
            detail ="Write better. Think more clearly. Stay organized." icon="single" />
            </span>
            <ProfileCard key="2" title="With my team" detail ="Wikis, docs, tasks, projects, all in one place." icon="group" />
        </div>
        <br />
    </div>
  )
}

import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles({
  root: {
    width: 150,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginBottom: 12,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProfileCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" >
      <CardContent style={{textAlign:'left'}}>
        {props.icon == 'single'? <PersonIcon className={classes.pos} fontSize='medium'/> : <GroupIcon className={classes.pos} fontSize='medium'/> }
        {/* <FontAwesomeIcon icon="fa-solid fa-users" /> */}
        <Typography className={classes.title} >
          <b>{props.title}</b>
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary" >
          {props.detail}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

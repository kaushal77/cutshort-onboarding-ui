import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalInfo from './PersonalInfo';
import Workspace from './Workspace';
import ThirdPhase from './ThirdPhase';
import Finish from './Finish';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor:'rgb(102,77,229)',
    color:'white',
    '&:hover':{
      backgroundColor:'rgb(102,77,229)',
      color:'white',
      
    },

  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  MuiStepIconRoot:{
    '& .MuiStepIcon-active':{
      color:'rgb(102,77,229)'
    },
    '& .MuiStepIcon-completed':{
      color:'rgb(102,77,229)'
    }
  },
  MuiButtonContained:{
    
  },
  StepperSize:{
    width:'23%',
    marginBottom:'2%',
    '@media (max-width: 780px)' : {
      width: '240px'
    },
  }
}));

function getSteps() {
  return ['', '', '',''];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <Workspace />;
    case 2:
      return <ThirdPhase />;
    default:
      return <Finish />;
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }
    if(activeStep < 3)
    {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    
    // setSkipped(newSkipped);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleSkip = () => {
    // if (!isStepOptional(activeStep)) {
    //   // You probably want to guard against something like this,
    //   // it should never occur unless someone's actively trying to break something.
    //   throw new Error("You can't skip a step that isn't optional.");
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div className={classes.root} style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} >
      <Stepper activeStep={activeStep} className={classes.StepperSize}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        //   if (isStepOptional(index)) {
        //     labelProps.optional = <Typography variant="caption"></Typography>;
        //   }
        //   if (isStepSkipped(index)) {
        //     stepProps.completed = false;
        //   }
          return (
            <Step  key={label} {...stepProps}>
              <StepLabel className={classes.MuiStepIconRoot}  {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
        
          <section>
            {getStepContent(activeStep)}
            <div >
              <Button
                variant="contained"
                onClick={handleNext}
                disableRipple
                inputProps={{classes:{ MuiButtonContained: classes.MuiButtonContained }}}
                fullWidth={true}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Launch Eden' : 'Create Worspace'}
              </Button>
            </div>
          </section>
          
      </div>
  );
}

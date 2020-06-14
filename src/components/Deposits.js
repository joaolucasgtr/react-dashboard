import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { useStyles } from "../style";

export default function Deposits(props) {
  const classes = useStyles();
  const { title, main, secondary } = props;

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {title}
      </Typography>
      <Typography component="p" variant="h4">
        {main}
      </Typography>
      <Typography color="textSecondary" className={classes.flex1}>
        {secondary}
      </Typography>
      <div>
        <Button>More</Button>
      </div>
    </>
  );
}
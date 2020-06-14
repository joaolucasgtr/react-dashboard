import React from "react";
import { Grid, Box, Paper, Typography, Link } from "@material-ui/core";
import clsx from "clsx";

import DataTable from "../components/DataTable";
import Deposits from "../components/Deposits";
import Chart from "../components/Chart";

import { useStyles } from "../style";

const deposits = { title: 'Desposits', main: '$3,024.00', secondary: 'on 15 March, 2019' };
const orders = {
  title: 'Orders',
  headers: [
    { prop: "id", label: "#", hidden: true },
    { prop: "date", label: "Date" },
    { prop: "name", label: "Name" },
    { prop: "shipTo", label: "Ship To" },
    { prop: "payment", label: "Payment Method" },
    { prop: "amount", label: "Sale Amount" },
  ],
  rows: [
    { id: 0, date: "16 Mar, 2019", name: "Elvis Presley", shipTo: "Tupelo, MS", payment: "VISA ⠀•••• 3719", amount: 312.44 },
    { id: 1, date: "16 Mar, 2019", name: "Paul McCartney", shipTo: "London, UK", payment: "VISA ⠀•••• 2574", amount: 866.99 },
    { id: 2, date: "16 Mar, 2019", name: "Tom Scholz", shipTo: "Boston, MA", payment: "MC ⠀•••• 1253", amount: 100.81 },
    { id: 3, date: "16 Mar, 2019", name: "Michael Jackson", shipTo: "Gary, IN", payment: "AMEX ⠀•••• 2000", amount: 654.39 },
    { id: 4, date: "15 Mar, 2019", name: "Bruce Springsteen", shipTo: "Long Branch, NJ", payment: "VISA ⠀•••• 5919", amount: 212.79 },
  ]
};
const chart = {
  title: 'Today',
  label: 'Sales ($)',
  data: [
    { time: '00:00', amount: 0 },
    { time: '03:00', amount: 300 },
    { time: '06:00', amount: 600 },
    { time: '09:00', amount: 800 },
    { time: '12:00', amount: 1500 },
    { time: '15:00', amount: 2000 },
    { time: '18:00', amount: 2400 },
    { time: '21:00', amount: 2400 },
    { time: '24:00', amount: undefined }
  ]
};

const Home = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <h1>Dashboard</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart {...chart} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits {...deposits} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <DataTable {...orders} />
          </Paper>
        </Grid>
      </Grid>
      <Box pt={4}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">  Your Website </Link>
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  );
};

export default Home;

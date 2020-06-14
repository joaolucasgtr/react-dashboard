import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import clsx from 'clsx';
import {
  Badge, Container, Drawer, AppBar, List,
  Toolbar, Typography, Divider, IconButton
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon
} from '@material-ui/icons';

import ListItemLink from "./ListItemLink";

import { useStyles } from "../style";

const Navigation = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.flex1}>
            {props.title}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
        open={open} >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List color="inherit">
          {props.routes.map((r, i) => <ListItemLink key={i} to={r.path} label={r.label} icon={r.icon} />)}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            {props.routes.map((route, i) => <Route key={i} exact {...route} />)}
          </Switch>
        </Container>
      </main>
    </div>
  );
}

export default Navigation;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { theme } from './style';
import Navigation from './components/Navigation';

import Home from './routes/Home';
import Dashboard from './routes/Dashboard';
import TabsSample from "./routes/TabsSample";
import Counter from "./routes/Counter";

const routes = [
  { component: Home, path: '/', label: 'Home', icon: 'home' },
  { component: Dashboard, path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { component: Counter, path: '/counter', label: 'Counter', icon: 'add_circle' },  
  { component: TabsSample, path: '/tabs', label: 'Tabs', icon: 'folder' }
];

const App = () => (
  <ThemeProvider theme={theme}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <CssBaseline />
    <Router basename="/">
      <Navigation title="Dashboard" routes={routes} />
    </Router>
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

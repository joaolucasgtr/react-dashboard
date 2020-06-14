import React, { useState } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

import TabPanel from "../components/TabPanel";

const SubRouteOne = () => <h3>Sub Route One</h3>
const SubRouteTwo = () => <h3>Sub Route Two</h3>
const SubRouteThree = () => <h3>Sub Route Three</h3>

const TabsSamples = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Paper>
        <Tabs
          value={value}
          onChange={(event, newVal) => setValue(newVal)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <SubRouteOne />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SubRouteTwo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SubRouteThree />
      </TabPanel>
    </div>
  );
}

export default TabsSamples;
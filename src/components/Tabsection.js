import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const Tabsection = () => {
  return (
    <div id="tabs-content">
      <Tabs>
        <TabList>
          <Tab>Main skills</Tab>
          <Tab>Education</Tab>
          <Tab>Certifications</Tab>
          <Tab>Experience</Tab>
        </TabList>
        <TabPanel>
          <ul>
            <li>
              <h5>html and css</h5>
            </li>
            <li>
              <h5>html and css</h5>
            </li>
            <li>
              <h5>html and css</h5>
            </li>
            <li>
              <h5>html and css</h5>
            </li>
            <li>
              <h5>html and css</h5>
            </li>
            <li>
              <h5>html and css</h5>
            </li>
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabsection;

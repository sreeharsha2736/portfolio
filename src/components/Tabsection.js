import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaRegThumbsUp } from "react-icons/fa";
const Tabsection = () => {
  return (
    <div id="tabs-content">
      <Tabs className="col-10 mx-auto">
        <TabList id="tab">
          <Tab id="tab">
            <h5>Main skills</h5>
          </Tab>
          <Tab id="tab">
            <h5>Education</h5>
          </Tab>
          <Tab id="tab">
            <h5>Certifications</h5>
          </Tab>
          <Tab id="tab">
            <h5>Work Experience</h5>
          </Tab>
        </TabList>
        <TabPanel className="pl-3 pt-4">
          <h4 id="tabheader1" className="">
            {" "}
            Web Technologies
          </h4>
          <ul>
            <li>
              <h5>
                {" "}
                <FaRegThumbsUp /> &nbsp; Html and css
              </h5>
            </li>
            <li>
              <h5>
                {" "}
                <FaRegThumbsUp /> &nbsp; Javascript
              </h5>
            </li>
            <li>
              <h5>
                {" "}
                <FaRegThumbsUp /> &nbsp; PHP
              </h5>
            </li>
            <li>
              <h5>
                {" "}
                <FaRegThumbsUp /> &nbsp; Basics of C and Python
              </h5>
            </li>
          </ul>

          <h4 id="tabheader1">FRAMEWORKS</h4>
          <ul>
            <li>
              <h5>
                {" "}
                <FaRegThumbsUp /> &nbsp; React.js
              </h5>
            </li>
            <li>
              <h5>
                {" "}
                <FaRegThumbsUp /> &nbsp; Express.js
              </h5>
            </li>
          </ul>
          <h4 id="tabheader1">DATABASES</h4>
          <ul>
            <li>
              {" "}
              <FaRegThumbsUp /> &nbsp; Mongodb
            </li>
          </ul>
        </TabPanel>
        <TabPanel className="pl-3 ">
          <h4 id="tabheader1">R.M.K ENGINERING COLLGE</h4>
          <p>Electronics and communication Enginnering</p>
          <p> - 7.01 C.G.P.A</p>

          <h4 id="tabheader1">VIGNAN CO-OPERATIVE JUNIOR COLLEGE</h4>
          <p>I.P.E</p>
          <p> - 96.4 % </p>
          <h4 id="tabheader1">J.C.R'S CHAITANYA E.M HIGH SCHOOL</h4>
          <p>Electronics and communication Enginnering</p>
          <p> - 7.01 C.G.P.A</p>
        </TabPanel>
        <TabPanel className="pl-3">
          <h4 id="tabheader1">NPTEL - Introduction to IOT</h4>
          <br />
          <h4 id="tabheader1">BEC Vantage Certificate - B1</h4>
        </TabPanel>
        <TabPanel className="pl-3">
          <h2 id="tabheader1">AARHAT ISERV LLP</h2>
          <p>Web developer Intern</p>
          <p>
            Worked on web technologies like
            HTML,CSS,Bootstrap,Javascript,PHP,React.js
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabsection;

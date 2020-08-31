import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Characteristic",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/">
                            Progressive Web App Developer <span> - FE/BE</span>
                          </a>
                          Javascript is my go to. Currently also learning
                          PHP.
                        </li>
                        <li>
                          <a href="/">
                            Front End Design<span> - Development</span>
                          </a>
                          I love to use frameworks. All types.
                        </li>
                        <li>
                          <a href="/">
                            Databases<span> - Development</span>
                          </a>
                          MySQL, MongoDB and Stackoverflowing my way out of a
                          problem
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/">
                            Cheekiness (Only when I know you){" "}
                            <span>- Winner</span>
                          </a>{" "}
                          1996 - Current
                        </li>
                        <li>
                          <a href="/">
                            Optimistic (Glass Half Full){" "}
                            <span>- Runner up</span>
                          </a>{" "}
                          2010 - Current
                        </li>
                        <li>
                          <a href="/">
                            Future Oriented <span>- Wannabe</span>
                          </a>{" "}
                          Current - Creation of Dyson Sphere
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/">
                            Contracted Jr Full Stack Developer
                            <span> - Common Extract</span>
                          </a>{" "}
                          2020 - Current
                        </li>
                        <li>
                          <a href="/">
                            Systems Administration / NPD
                            <span> - Milne Agrigroup</span>
                          </a>{" "}
                          2019 - Current
                        </li>
                        <li>
                          <a href="/">
                            Food Technologist / Analyst
                            <span> - The Lupin Co </span>
                          </a>{" "}
                          2018- 2019
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/">
                            Coding Bootcamp
                            <span> - University of Western Australia</span>
                          </a>{" "}
                          2020
                        </li>
                        <li>
                          <a href="/">
                            Bachelor's Degree in Molecular Life Sciences{" "}
                            <span> - Curtin University</span>
                          </a>{" "}
                          2018
                        </li>
                        <li>
                          <a href="/">
                            Cert IV Mechanical Engineer
                            <span> - Curtin College</span>
                          </a>{" "}
                          2015
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;

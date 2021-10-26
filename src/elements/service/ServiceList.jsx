import React, { Component } from "react";
import { DiMysql } from "react-icons/di";
import {
  FaAws,
  FaCode,
  FaGitAlt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";

const ServiceList = [
  {
    icon: <FaJs />,
    title: "Javascript",
    description: `"The most misunderstood language of all time." Main language that I code in. I also know TypeScript and the forgotten JQuery`,
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    description:
      "My first introduction to asynchronous programming and the world of NPM. I showed it to my goldfish... It is now a Megalodon shark",
  },
  {
    icon: <FaCode />,
    title: "MQTT",
    description:
      "Internet of Things. I built a contactless vending machine! Also learning how arduino works as I go",
  },
  {
    icon: <FaReact />,
    title: "React",
    description:
      "May God bless the souls that wrote the documentations. It is solely responsible for teaching me how to code cleanly and I could go on and on about how much I like React",
  },
  {
    icon: <FaVuejs />,
    title: "Vue",
    description: "Friendship ended with React, Now VUE is my bestfriend",
  },
  {
    icon: <IoLogoIonic />,
    title: "Ionic Framework v5",
    description:
      "As an Apple fan boy this is my favourite framework to build on. I've spent more time in its components section than programming itself ! ok, thats a lie. I spend most of my time writing witty stuff on my resume",
  },
  {
    icon: <DiMysql />,
    title: "MySQL",
    description:
      "What? Huh? Drop. Opps I accidentally dropped the schema. I am switching to Mongoose. My favourite past time is to run npm create:db so long string of text appears on my terminal and I can live out the fantasy of being a hacker",
  },
  {
    icon: <FaAws />,
    title: "AWS",
    description:
      "Something something cloud computing. AWS is next Skynet. I, for one pledge my allegiance to our tech overlords. Also I have exposure to Digital Ocean and Google Console ",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    description:
      "Is Git a skill I should put on my Notable Tech skills ? I feel like every programmer should know Git but some of them still don't know how merges, branches and all that stuff works. `And for that reason I am chugging it on here.`- Mark Cuban (if he was a programmer instead of a billionaire)",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <div className="service service__style--2">
                <div className="icon">{val.icon}</div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;

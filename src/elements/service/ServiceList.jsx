import React, { Component } from "react";
import { IoLogoIonic } from "react-icons/io";
import { FaNodeJs, FaJs, FaReact, FaCode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const ServiceList = [
  {
    icon: <FaJs />,
    title: "Javascript",
    description: `"The most misunderstood language of all time." Main language that I code in. I also know TypeScript and the forgotten JQuery.`
  },
  {
    icon: <IoLogoIonic />,
    title: "Ionic Framework v5",
    description:
      "As an Apple fan boy this is my favourite framework to build on. I've spent more time in components section than coding itself."
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    description:
      "My first introduction to asynchronous programming and the world of NPM. I showed it to my goldfish it is now a Megalodon shark."
  },
  {
    icon: <FaCode />,
    title: "MQTT",
    description:
      "Internet of Things. I built a vending machine. Learning how arduino works as I go."
  },
  {
    icon: <FaReact />,
    title: "React",
    description:
      "May God bless the souls that wrote the documentation and thanks for teaching me how to code cleanly."
  },
  {
    icon: <DiMysql />,
    title: "MySQL",
    description: "What? Huh? Drop. Opps. I am switching to Mongoose."
  }
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

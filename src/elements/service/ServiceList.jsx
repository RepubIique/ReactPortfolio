import React, { Component } from "react";
import { IoLogoIonic } from "react-icons/io";
import { FaNodeJs, FaJs, FaReact, FaCode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const ServiceList = [
  {
    icon: <FaJs />,
    title: "Javascript",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FaReact />,
    title: "React",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <IoLogoIonic />,
    title: "Ionic Framework v5",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <DiMysql />,
    title: "MySQL",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FaCode />,
    title: "MQTT",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
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

import React, { Component } from "react";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Alpha Testing Stage",
    title: "Travel Itinerary",
    link: "https://jpmc3630.github.io/letsgo/",
    github: "https://github.com/timothyosm/Letsgo",
  },
  {
    image: "image-2",
    category: "Live",
    title: "Nanobar",
    link: "https://nanobar.io",
    github: "https://github.com/RepubIique/MQTTProject",
  },
  {
    image: "image-3",
    category: "Beta Testing Stage",
    title: "Solar Solutions",
    link: "https://my-solar-solution.herokuapp.com",
    github: "https://github.com/RepubIique/my-solar-solution",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a>{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href={value.link}>
                      Visit Project
                    </a>
                  </div>
                  <div className="portfolio-button">
                    <a className="rn-btn" href={value.github}>
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;

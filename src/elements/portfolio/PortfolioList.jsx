import React, { Component } from "react";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Alpha Testing Stage",
    title: "Where Would You Like To Go Next?",
    link: "https://timothyosm.github.io/ProjectOne/"
  },
  {
    image: "image-2",
    category: "In Development",
    title: "Nonobar",
    link: "https://nanobar.io"
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show"
  }
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

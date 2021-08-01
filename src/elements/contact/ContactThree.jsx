import React, { Component } from "react";

class ContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnEmail: "",
      rnSubject: "",
      rnMessage: "",
      emailSent: null,
      disabled: false
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disabled: true,
      
    })
  }
 
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">{this.props.contactTitle}</h2>
                <p className="description">
                  I am available for all types of work. Connect with me via
                  email:
                  <a href="mailto:kendrickbong1996@gmail.com">
                    {" "}
                    kendrickbong1996@gmail.com
                  </a>{" "}
                  or one of the following below.
                </p>
              </div>

              <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="name"
                      id="item01"
                      value={this.state.rnName}
                      onChange={e => {
                        this.setState({ rnName: e.target.value });
                      }}
                      placeholder="Your Name *"
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={this.state.rnEmail}
                      onChange={e => {
                        this.setState({ rnEmail: e.target.value });
                      }}
                      placeholder="Your Email *"
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.rnSubject}
                      onChange={e => {
                        this.setState({ rnSubject: e.target.value });
                      }}
                      placeholder="Write a Subject"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.rnMessage}
                      onChange={e => {
                        this.setState({ rnMessage: e.target.value });
                      }}
                      placeholder="Your Message"
                    />
                  </label>
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    disabled = {this.state.disabled}
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>

                  {this.state.emailSent === true && <p className="success-msg">Email sent</p>}
                  {this.state.emailSent === false && <p className="error-msg">Email not sent</p>}
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={`${this.props.contactImages}`} alt="trydo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactThree;

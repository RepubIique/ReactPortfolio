import Axios from "axios";
import React, { Component } from "react";

class ContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      emailSent: null,
      disabled: false,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(event.target.value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disabled: true,
    });

    Axios.post("/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({ disabled: false, emailSent: true });
        } else {
          this.setState({ disabled: false, emailSent: false });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

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
                      value={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Your Name *"
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Your Email *"
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.subject}
                      onChange={this.handleChange}
                      placeholder="Write a Subject"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      placeholder="Your Message"
                    />
                  </label>
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    disabled={this.state.disabled}
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>

                  {this.state.emailSent === true && (
                    <p className="success-msg">Email sent</p>
                  )}
                  {this.state.emailSent === false && (
                    <p className="error-msg">Email fail to sent</p>
                  )}
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

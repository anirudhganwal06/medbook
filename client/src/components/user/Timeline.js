import React, { Component } from "react";
import { connect } from "react-redux";

class Timeline extends Component {
  render() {
    let records = [];
    const fetchedRecs = this.props.auth.user.records;
    fetchedRecs.reverse();
    const monthMap = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const weekMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday"];
    for (let i in fetchedRecs) {
      let date = new Date(1970, 0, 1);
      date.setSeconds(fetchedRecs[i].date._seconds);
      // let date = fetchedRecs[i].date.toDate();
      records.push(
        <article className="timeline-entry ">
          <div className="timeline-entry-inner">
            <time className="timeline-time" dateTime="2014-01-10T03:45">
              <span>
                {date.getDate() +
                  " " +
                  monthMap[date.getMonth()] +
                  ", " +
                  date.getFullYear()}
              </span>
              <span>{weekMap[date.getDay()]}</span>
            </time>

            <div className="timeline-icon bg-danger">
              <i className="fas fa-medal"></i>
            </div>
            <div className="timeline-label">
              <h2 className="font-weight-bold"><span className="text-muted">Hospital: </span>{fetchedRecs[i].hostipalId}</h2>
              <h2><span className="text-muted">Files: </span>{fetchedRecs[i].image}</h2>
              <h5><span className="text-muted">Description: </span>{fetchedRecs[i].desc}</h5>
              <h4 className="text-right">
                <a href="#">View Documents</a>
              </h4>
            </div>
          </div>
        </article>
      );

      records.push(
        <article className="timeline-entry begin">
          <div className="timeline-entry-inner">
            <div
              className="timeline-icon"
              // style="-webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg);"
            >
              <i className="fas fa-rocket"></i>
            </div>
          </div>
        </article>
      );
    }
    console.log("records");
    console.log(fetchedRecs);
    return (
      <div>
        <div className="container-fluid mt-4">
          <h1 className="text-dark text-center font-weight-light my-3">
            TIMELINE
          </h1>
          <div className="row p-r-l-15">
            <div className="timeline-centered col-12">
              {records}
            </div>
          </div>
        </div>

        <section id="contact" className="section-bg wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h3>Contact Us</h3>
              <h4 className="text-center my-3">
                We always keep our users in mind .
              </h4>
            </div>

            <div className="row contact-info">
              <div className="col-md-4">
                <div className="contact-address">
                  <i className="ion-ios-location-outline"></i>
                  <h3>Address</h3>
                  <address>MAC building , IIT ROORKEE</address>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline"></i>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+155895548855">+91 94851-12465</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-email">
                  <i className="ion-ios-email-outline"></i>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@example.com">info@medbook.in</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" className="contactForm">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validation"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validation"></div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Timeline);

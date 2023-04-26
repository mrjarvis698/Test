import React, { Component } from "react";
import { Fade} from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;

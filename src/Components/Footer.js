import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer id="contact">
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <Fade bottom duration={1000}>
                  <li className="re">Contact us : support@drnko.com</li>
              </Fade>

              <ul className="copyright">
                <li> Copyright &copy; 2022 Drnko! - All Rights Reserved.</li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

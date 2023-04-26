import React, { Component } from "react";
import Fade from "react-reveal";
import Lottie from 'lottie-react'
import Drinko_fulllogo_ai from './Images/Drinko_fulllogo_ai.json'

const style = {
  height: 80,
  width: 280,
};

class Header extends Component {
  render() {
    if (!this.props.data) return null;
    const description = this.props.data.description;

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#card_base">
                Services
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#download">
                Download
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline"><Lottie className="center" animationData={Drinko_fulllogo_ai} style={style} loop={true}/></h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="#download" className="smoothscroll button btn project-btn">Get the App</a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#card_base">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;

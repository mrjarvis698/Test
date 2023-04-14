import React, { Component } from "react";
import Fade from "react-reveal";
import playstore_btn from "./Images/google-play.png"
import drnko_logo from "./Images/Drnko_logo_animation2.json"
import Lottie from 'lottie-react'

const style = {
  height: 130,
  width: 110,
};

class Download extends Component {
  render() {
    if (!this.props.data) return null;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;

    return (
      <section id="download">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <div className="three columns">
                <Lottie className="center" animationData={drnko_logo} style={style} loop={true}/>
              </div>
          
              <h2>Join Our Drnko Community</h2>
              <p>{bio}</p>

            </div>

            <div className="three columns">
              <div className="row">
                <p>
                  <a href="https://play.google.com/store/apps/details?id=com.drnko.socialapp"><img src= {playstore_btn} alt="Drnko PS"/></a>
                </p>
              </div>
            </div> 
                       
          </div>
        </Fade>
      </section>
    );
  }
}

export default Download;

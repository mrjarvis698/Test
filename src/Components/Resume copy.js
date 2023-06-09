import React, { Component } from "react";
import Slide from "react-reveal";
import { useState } from "react";
import "./card.css";



class Resume extends Component {
  state = {
    usersExpanded: '',
    retailersExpanded: '',
    drinkoExpanded: ''
  }

  handleuserCardClick = (cardName) => {
    if (this.state.usersExpanded === cardName) {
      this.setState({ usersExpanded: '' });
    } else {
      this.setState({ usersExpanded: cardName });
    }
  }

  handleretailerCardClick = (cardName) => {
    if (this.state.retailersExpanded === cardName) {
      this.setState({ retailersExpanded: '' });
    } else {
      this.setState({ retailersExpanded: cardName });
    }
  }

  handledrinkoCardClick = (cardName) => {
    if (this.state.drinkoExpanded === cardName) {
      this.setState({ drinkoExpanded: '' });
    } else {
      this.setState({ drinkoExpanded: cardName });
    }
  }

  render() {
    const { usersExpanded } = this.state;
    const { retailersExpanded } = this.state;
    const { drinkoExpanded } = this.state;

    return (
      <div className="cards-container">
        <div className={`card ${usersExpanded ? 'expanded' : ''}`} onClick={() => this.handleuserCardClick('Users')}>
          <h2>Users</h2>
          {usersExpanded && (
            <>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia ex id sagittis dignissim. Praesent et ipsum eget odio laoreet faucibus eu non est.</p>
              <p>Aliquam porttitor, est non pulvinar congue, neque nulla commodo magna, sit amet luctus justo enim sed urna.</p>
            </>
          )}
        </div>
        <div className={`card ${retailersExpanded ? 'expanded' : ''}`} onClick={() => this.handleretailerCardClick('Retailers')}>
          <h2>Retailers</h2>
          {retailersExpanded && (
            <>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia ex id sagittis dignissim. Praesent et ipsum eget odio laoreet faucibus eu non est.</p>
              <p>Aliquam porttitor, est non pulvinar congue, neque nulla commodo magna, sit amet luctus justo enim sed urna.</p>
            </>
          )}
        </div>
        <div className={`card ${drinkoExpanded  ? 'expanded' : ''}`} onClick={() => this.handledrinkoCardClick('Drinko')}>
          <h2>Drinko</h2>
          {drinkoExpanded && (
            <>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia ex id sagittis dignissim. Praesent et ipsum eget odio laoreet faucibus eu non est.</p>
              <p>Aliquam porttitor, est non pulvinar congue, neque nulla commodo magna, sit amet luctus justo enim sed urna.</p>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Resume;

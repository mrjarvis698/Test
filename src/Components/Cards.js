import React, { Component } from "react";
import "./Cards.css";
import usercard from "./Images/User.png"
import retailercard from "./Images/Retailer.png"
import companiescard from "./Images/Companies.png"

class Cards extends Component {
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
      <section id="card_base">
        <div className="row">
            <div className="nine columns main-col">
              <h1>Services</h1>
            </div>              
        </div>
        <div className="cards-container">
          
          <div className={`card ${usersExpanded ? 'expanded' : ''}`} onClick={() => this.handleuserCardClick('Users')}>
            <h2>Users</h2>
            <img src={usercard} alt="Users"/>
            {usersExpanded && (
              <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia ex id sagittis dignissim. Praesent et ipsum eget odio laoreet faucibus eu non est.</p>
                <p>Aliquam porttitor, est non pulvinar congue, neque nulla commodo magna, sit amet luctus justo enim sed urna.</p>
              </>
            )}
          </div>
          <div className={`card ${retailersExpanded ? 'expanded' : ''}`} onClick={() => this.handleretailerCardClick('Retailers')}>
            <h2>Retailers</h2>
            <img src={retailercard} alt="Users"/>
            {retailersExpanded && (
              <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia ex id sagittis dignissim. Praesent et ipsum eget odio laoreet faucibus eu non est.</p>
                <p>Aliquam porttitor, est non pulvinar congue, neque nulla commodo magna, sit amet luctus justo enim sed urna.</p>
              </>
            )}
          </div>
          <div className={`card ${drinkoExpanded  ? 'expanded' : ''}`} onClick={() => this.handledrinkoCardClick('Drinko')}>
            <h2>Liquor Co.</h2>
            <img src={companiescard} alt="Users"/>
            {drinkoExpanded && (
              <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia ex id sagittis dignissim. Praesent et ipsum eget odio laoreet faucibus eu non est.</p>
                <p>Aliquam porttitor, est non pulvinar congue, neque nulla commodo magna, sit amet luctus justo enim sed urna.</p>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;

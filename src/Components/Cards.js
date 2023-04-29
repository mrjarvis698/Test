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
                <p>Scan any beverage bill anywhere.</p>
                <p>Get rewards for the drinks consumed.</p>
                <p>Redeem the rewards for your favourite vouchers for free.</p>
                <p> </p>
                <p> </p>
                
              </>
            )}
          </div>
          <div className={`card ${retailersExpanded ? 'expanded' : ''}`} onClick={() => this.handleretailerCardClick('Retailers')}>
            <h2>Retailers</h2>
            <img src={retailercard} alt="Users"/>
            {retailersExpanded && (
              <>
                <p>List your establishment for free.</p>
                <p>Let users search for your bar.</p>
                <p>Drive traffic and higher conversion.</p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
              </>
            )}
          </div>
          <div className={`card ${drinkoExpanded  ? 'expanded' : ''}`} onClick={() => this.handledrinkoCardClick('Drinko')}>
            <h2>Liquor Co.</h2>
            <img src={companiescard} alt="Users"/>
            {drinkoExpanded && (
              <>
                <p>Maximise your marketing spend by targeting your customers directly.</p>
                <p>Use Drnko to generate reviews and user feedback about your products.</p>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;

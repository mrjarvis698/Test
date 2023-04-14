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

  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const { usersExpanded } = this.state;
    const { retailersExpanded } = this.state;
    const { drinkoExpanded } = this.state;
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });


    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="nine columns main-col">
              <div className="row item">
                <div className={`columns card ${usersExpanded ? 'expanded' : ''}`} onClick={() => this.handleuserCardClick('Users')}>
                  <h2>Users</h2>
                  {usersExpanded && (
                    <>
                      <p>{education}</p>
                    </>
                  )}
                </div>
                <div className={`columns card ${retailersExpanded ? 'expanded' : ''}`} onClick={() => this.handleretailerCardClick('Retailers')}>
                  <h2>Retailers</h2>
                  {retailersExpanded && (
                    <>
                      <p>{education}</p>
                    </>
                  )}
                </div>
                <div className={`columns card ${drinkoExpanded  ? 'expanded' : ''}`} onClick={() => this.handledrinkoCardClick('Drinko')}>
                  <h2>Drinko</h2>
                  {drinkoExpanded && (
                    <>
                      <p>{education}</p>
                    </>
                  )}
                </div>
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;

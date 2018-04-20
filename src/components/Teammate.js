import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Teammate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.toggleActive = this.toggleActive.bind(this);
  }
  toggleActive() {
      this.setState({
        isActive: !this.state.isActive
      })
  }
  render() {
    return(
      <li className={"teammate " + (this.state.isActive ? "teammate--active" : "")}>
        <div className="teammate__info">
          <span className="teammate__name">{this.props.name}</span>
          <span className="teammate__nominations">{this.props.nominations}</span>
          <span className="teammate__nominate" onClick={this.toggleActive}><i className="fas fa-trophy"></i> Nominate</span>
        </div>
        <div className="teammate__nominate-panel">
          <h2>Nominate {this.props.name}</h2>
          <textarea className="teammate__nominate-textarea" placeholder="Why are you nominating them?"></textarea>
          <span className="teammate__nominate-submit" onClick={this.submitNomination}><i className="fas fa-paper-plane"></i> Submit Nomination</span>
          <span className="teammate__nominate-close" onClick={this.toggleActive}><i className="fas fa-times"></i></span>
        </div>
      </li>
    )
  }
}

Teammate.propTypes = {
  name: PropTypes.string.isRequired,
  nominations: PropTypes.number.isRequired
}

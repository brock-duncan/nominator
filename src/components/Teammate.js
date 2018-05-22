import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Teammate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      nominationText: "",
      nominations: this.props.nominations
    }
    this.toggleActive = this.toggleActive.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNomination = this.handleNomination.bind(this);
    this.nominationArea = React.createRef();
  }
  toggleActive() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  handleChange(e) {
    this.setState({
      nominationText: e.target.value
    })
  }
  handleNomination() {
    if(this.state.nominationText.length > 0) {
      this.props.onNomination(this.props.id, {nomination: this.state.nominationText, author: "Brock"});
      this.toggleActive();
      this.setState({
        nominationText: ""
      });
      this.nominationArea.current.value = "";
    } else {
      alert('enter a nomination');
    }
  }
  render() {
    return(
      <li className={"teammate " + (this.state.isActive ? "teammate--active" : "")}>
        <div className="teammate__info">
          <span className="teammate__name">{this.props.name}</span>
          <span className="teammate__nominations">{this.props.nominations.length}</span>
          <span className="teammate__nominate" onClick={this.toggleActive}><i className="fas fa-trophy"></i> Nominate</span>
        </div>
        <div className="teammate__nominate-panel">
          <h2>Nominate {this.props.name}</h2>
          <textarea className="teammate__nominate-textarea"
                    placeholder="Why are you nominating them?"
                    onChange={this.handleChange}
                    ref={this.nominationArea}></textarea>
                  <span className="teammate__nominate-submit" onClick={this.handleNomination}><i className="fas fa-paper-plane"></i> Submit Nomination</span>
          <span className="teammate__nominate-close" onClick={this.toggleActive}><i className="fas fa-times"></i></span>
        </div>
      </li>
    )
  }
}

Teammate.propTypes = {
  name: PropTypes.string.isRequired,
  nominations: PropTypes.array.isRequired,
  onNomination: PropTypes.func.isRequired
}

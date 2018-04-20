import React, { Component } from 'react';
import Teammate from './Teammate';

export default class TeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teammates: [
        {
          id: 1,
          name: 'Josh Moyer',
          nominations: 3,
        },
        {
          id: 2,
          name: 'Tim Ruby',
          nominations: 4,
        },
        {
          id: 3,
          name: 'James Golden',
          nominations: 5,
        }
      ]
    }
  }
  render() {
    return(
      <ul className="team-list">
        {this.state.teammates.map((teammate) =>
          <Teammate name={teammate.name} nominations={teammate.nominations} key={teammate.id}/>
        )}
      </ul>
    )
  }
}

import React, { Component } from 'react';
import Teammate from './Teammate';

export default class TeamList extends Component {
  constructor(props) {
    super(props);
    this.onNomination = this.onNomination.bind(this);
    this.state = {
      teammates: [
        {
          id: 1,
          name: 'Josh Moyers',
          nominations: [
            {
              nomination: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              author: "Brock Duncan"
            },
            {
              nomination: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              author: "Brock Duncan"
            }
          ]
        },
        {
          id: 2,
          name: 'Tim Ruby',
          nominations: [
            {
              nomination: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              author: "Brock Duncan"
            }
          ]
        },
        {
          id: 3,
          name: 'James Golden',
          nominations: [
            {
              nomination: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              author: "Brock Duncan"
            },
            {
              nomination: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              author: "Brock Duncan"
            },
            {
              nomination: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              author: "Brock Duncan"
            }
          ]
        }
      ]
    }
  }
  onNomination(id, nomination) {
    // find teammate
    let obj = this.state.teammates.findIndex(obj => {
      return obj.id === id;
    });
    // add nomination to teammate in state
    let teammatesCopy = this.state.teammates;
    teammatesCopy[obj].nominations.push(nomination);
    this.setState((prevState) => ({
      teammates: teammatesCopy
    }));
    console.log(this.state.teammates[obj]);
  }
  render() {
    return(
      <ul className="team-list">
        {this.state.teammates.map((teammate) =>
          <Teammate id={teammate.id} name={teammate.name} nominations={teammate.nominations} key={teammate.id} onNomination={this.onNomination}/>
        )}
      </ul>
    )
  }
}

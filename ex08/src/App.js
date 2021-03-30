import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render(){
    const characters = [
      {
        firstName: 'Lary',
        lastNmae: 'Page',
      },
      {
        firstName: 'Ada',
        lastNmae: 'Lovelace',
      },
      {
        firstName: 'Alan',
        lastNmae: 'Turing',
      }
    ]
    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}

export default App;

import React from 'react';
import axios from 'axios';


export default class CardList extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const cards = res.data;
        this.setState({ cards });
      })
  }
//   https://wanderlust-be.herokuapp.com/api/users/login

  render() {
    return (
      <ul>
        { this.state.cards.map(card => <li>{card.name}</li>)}
      </ul>
    )
  }
}
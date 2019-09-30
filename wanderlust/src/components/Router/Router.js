// import React from "react";
// import { BrowswerRouter as Router, Route } from "react-router-dom";
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import ExperiencesCard from './components/ExperiencesCard';
// import CTA from './components/CTA';

// export function Router() {
//     return (
//         <BrowserRouter>
//             <Route exact path='/' component={WelcomePage} />
//             <Route path='/experiences' component={ExperiencesCard} />
//             <Route path='/SignUp' component={SignUp} />
//             <Route path='/SignIn' component={SignIn} />
//         </BrowserRouter>
//     );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      axios.post(`https://wanderlust-be.herokuapp.com/api/users/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log("res", err)
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Posting input text to with API.:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
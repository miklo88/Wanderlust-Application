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
// another take on link routing for nav
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import { MemoryRouter as Router } from 'react-router';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';

// // // The use of React.forwardRef will no longer be required for react-router-dom v6.
// // // See https://github.com/ReactTraining/react-router/issues/6056


// const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

// const Link2 = React.forwardRef((props, ref) => (
//   <RouterLink innerRef={ref} to="/getting-started/installation/" {...props} />
// ));

// export default function LinkRouter() {
//   return (
//     <Router>
//       <div>
//         <Link component={Link1} to="/">
//           With prop forwarding
//         </Link>
//         <br />
//         <Link component={Link2}>Without prop forwarding</Link>
//       </div>
//     </Router>
//   );
// }





import React from 'react';
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

    // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    axios.post(`https://wanderlust-be.herokuapp.com/api/users/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Posting input text to state with API.:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}


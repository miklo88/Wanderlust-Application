import React from "react";
// import ReactDOM from "react-dom";
// import { BrowswerRouter as Router } from "react-router-dom";

// import { Router } from "./components/Router";
// import PersonList from "./components/Router/Router";
// import CardList from "./components/Router/GetAPI";
// import CTA from "./components/CTA/Cta";
import Nav from "./components/Navigation/Navigation";
// import Blog from "./src/components/Blog/Blog";
import NavTabs from "./components/Navigation/TabNavigation";
// import ExperiencesCard from "./src/components/Experiences/ExperiencesCard";
import Footer from "./components/Footer/Footer";
// import SignIn from "./components/SignIn/SignIn";
// import SignUp from "./components/SignUp/SignUp";
// import CharacterList from "./components/Experiences/ExperienceUpload";
import "typeface-roboto";

import "./App.css";
import "./components/SignIn/index.css";
// import Basic from "./components/SignUp";

function App() {
  return (
    <main className="HomePage">
      {/* <PersonList /> */}
      {/* <CardList />  */}
      <Nav />
      {/* <CharacterList /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <CTA /> */}
      <NavTabs />

      {/* <ExperiencesCard /> */}
      {/* <Blog /> */}
      <Footer />
    </main>
  );
}

export default App;


// git request and post request . 

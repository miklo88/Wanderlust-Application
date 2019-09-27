import React from "react";
// import ReactDOM from "react-dom";
// import { BrowswerRouter as Router } from "react-router-dom";

// import { Router } from "./components/Router";
import CTA from "./components/CTA/CTA";
import Nav from "./components/Navigation/Navigation";
// import Blog from "./src/components/Blog/Blog";
// import NavTabs from "./components/TabNavigation";
// import ExperiencesCard from "./src/components/Experiences/ExperiencesCard";
import Footer from "./components/Footer/Footer";
// import SignIn from "./components/SignIn/SignIn";
// import SignUp from "./components/SignUp/SignUp";
import InputForm from "./components/SignIn/index";

import "typeface-roboto";



import "./App.css";
import "./components/SignIn/index.css";
// import Basic from "./components/SignUp";

function App() {
  return (
    <main className="HomePage">
      {/* <Router /> */}
      <Nav />
      {/* <SignIn /> */}
      
      {/* <SignUp /> */}
      {/* <NavTabs /> */}
      <CTA />
      <InputForm />

      {/* <ExperiencesCard /> */}
      {/* <Blog /> */}
      <Footer />
    </main>
  );
}

export default App;

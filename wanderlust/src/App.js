import React from "react";

import Nav from "./components/Navigation/Navigation";
import NavTabs from "./components/Navigation/TabNavigation";
import Footer from "./components/Footer/Footer";

import "typeface-roboto";

import "./App.css";
import "./components/SignIn/index.css";

function App() {
  return (
    <main className="HomePage">
      <Nav />
      <NavTabs />
      <Footer />
    </main>
  );
}

export default App;


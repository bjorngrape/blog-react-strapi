// This is the app :)

import React from "react";

import { Switch, Route } from "react-router-dom"; // using the Switch and Route components from react-router-dom in order to establish a routing system for article page

import Nav from "../../components/Nav"; // import and declare Nav component in our App so it will show on every pages of our application 
import Articles from "../Articles"; // import and declare Articles container
import Article from "../Article";
import Category from "../Category";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
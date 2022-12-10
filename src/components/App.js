import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import NotFound from "./NotFound";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDetail from "./UserDetail";
import GithubState from "../contex/github/githubState";
import AlertState from "../contex/alert/alertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={UserDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;

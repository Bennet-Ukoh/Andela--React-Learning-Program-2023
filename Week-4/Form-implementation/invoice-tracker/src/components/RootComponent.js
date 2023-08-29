import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignInComponent";
import SignInComponent from "./SignInVanila";

export default class RootComponent extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signin" element={<SignInComponent />} />
        </Routes>
      </Router>
    );
  }
}

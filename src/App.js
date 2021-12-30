import React, { Component } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favourite from "./Components/Favourite";

export default class App extends Component {
  apiKey = process.env.REACT_APP_MOVIES_API;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={} /> */}
            <Route
              exact
              path="/"
              element={
                <>
                  <Banner />
                  <Movies apiKey={this.apiKey} />
                </>
              }
            />
            <Route exact path="/favourite" element={<Favourite />} />
          </Routes>
        </Router>
      </>
    );
  }
}

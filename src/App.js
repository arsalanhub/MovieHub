import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';

import React, { Component } from 'react'

export default class App extends Component {
  apiKey = process.env.REACT_APP_MOVIES_API
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <Movies apiKey={this.apiKey}/>  
      </>
    )
  }
}

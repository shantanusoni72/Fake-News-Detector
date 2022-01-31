import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header';
import Screen from './components/screen'
import About from './components/about'
import Feedback from './components/feedback'

function App() {

  return (
    <>
      <div className="App">
        <div className="bg-div">
          <Header />
          <Screen />
        </div>
        <About />
        <Feedback />
      </div>
    </>
  )
}

export default App;

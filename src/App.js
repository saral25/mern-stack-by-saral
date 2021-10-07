import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Entry from './components/Entry'
import Display from './components/Display'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Header/>
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/enter' component={Entry}></Route>
      <Route exact path='/show' component={Display}></Route>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Pages/form';
import Home from './Pages/home';
import About from './Pages/about';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';

function App() {
  return (
    

      <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/home' exact component={Home} />
		  <Route path='/form' component={Form} />
      <Route path='/about' component={About} /> 
      </Switch>
      </Router>

    
    


    

  );
}

export default App;

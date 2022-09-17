import React, { Component } from 'react';
import './App.css';
//import Navbar from './components/Navbar';
import { 
  //BrowserRouter as Router, //used in a 'development' environment
  HashRouter, //used in a 'production' environment
  Switch, Route 
} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/SignIn/signin';
import { trimLine,asPath } from './utils';
import { SIGN_IN } from './components/Navbar/NavbarConstants';

class App extends Component{
  render(){
    return (
      <HashRouter>
      {/* <Router> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path={asPath(trimLine(SIGN_IN))} component={Signin} exact />
        </Switch>
        {/* <Home/> */}
      {/* </Router> */}
      </HashRouter>
    );
  }
}

export default App;

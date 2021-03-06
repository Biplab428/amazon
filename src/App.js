import React from 'react';
import { BrowserRouter as Router , Link, Route , Switch } from "react-router-dom"
import './App.css';    
import Checkout from './Checkout';
import Header from './Header'
import Home from './Home'
function App() {
  return (
  <Router>
    
    <div className="app">
     <Switch>
       <Route path="/checkout">
         <Header />
         <Checkout />
       </Route>
       <Route path="/login">
         <Header />
         <Link to="/">
         <h1>helo login</h1>
         </Link>
       </Route>
       <Route path="/">
            <Header/>
            <Home />
       </Route>
     </Switch>
    </div>

  </Router>
    );
}

export default App;


import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component' ;
import ShopPage from './pages/shoppage/shoppage.component' ;
import {Switch, Route, Link} from 'react-router-dom';



function App(){
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </div>
  )
}

export default App;

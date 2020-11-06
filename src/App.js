import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component' ;
import ShopPage from './pages/shoppage/shoppage.component' ;
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-sign-up.component';
import {Switch, Route} from 'react-router-dom';



function App(){
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/Signin' component={SignInAndSignUpPage}/>
    </Switch>
      
    </div>
  )
}

export default App;

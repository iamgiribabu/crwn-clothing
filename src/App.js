import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component' ;
import ShopPage from './pages/shoppage/shoppage.component' ;
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-sign-up.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component{
  unsubscribeFromAuth = null ;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser : user });
      if(userAuth){
        const userRef =  await createUserProfileDocument(userAuth) //now we will store user data in state so that we can use in our app
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          });
          
        });
      }
      setCurrentUser(userAuth);
      
    });  
  }

 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }

  render(){
    return (
      
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          

          <Route exact path='/Signin' render= {
            ()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)
          } />
          <Route exact path='/checkout' component={CheckoutPage} />
          
        </Switch>
        
      </div>
    )
  }
  
}



const mapStateToProps = createStructuredSelector (
  {
    currentUser : selectCurrentUser
  }
)

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps )(App);

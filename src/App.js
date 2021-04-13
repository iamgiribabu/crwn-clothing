import React, {useEffect} from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component' ;
import ShopPage from './pages/shoppage/shoppage.component' ;
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions'

import {Switch, Route, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

// const App = ({setCurrentUser})=>{
//   unsubscribeFromAuth = null ;
//   // useEffect(()=>{
//   //   unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

//   //     //now we will store user data in state so that we can use in our app
//   //     if(userAuth){
//   //       const userRef =  await createUserProfileDocument(userAuth) 
//   //       userRef.onSnapshot(snapShot => {
//   //         setCurrentUser({
//   //           id:snapShot.id,
//   //           ...snapShot.data()
//   //         });
          
//   //       });
//   //     }
//   //     setCurrentUser(userAuth);
     
//   //   });  
//   // },[])

//   componentDidMount(){
  
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

//       //now we will store user data in state so that we can use in our app
//       if(userAuth){
//         const userRef =  await createUserProfileDocument(userAuth) 
//         userRef.onSnapshot(snapShot => {
//           setCurrentUser({
//             id:snapShot.id,
//             ...snapShot.data()
//           });
          
//         });
//       }
//       setCurrentUser(userAuth);
     
//     });  
//   }

//  componentWillUnmount(){
//    this.unsubscribeFromAuth();
//  }

//   return (
    
//     <div className="App">
//       <Header/>
//       <Switch>
//         <Route exact path='/' component={HomePage}/>
//         <Route  path='/shop' component={ShopPage}/>
        

//         <Route exact path='/Signin' render= {
//           ()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)
//         } />
//         <Route exact path='/checkout' component={CheckoutPage} />
        
//       </Switch>
      
//     </div>
//   )
  
  
// }
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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


const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
  
  }
)

const mapDispatchToProps = dispatch => ({
  checkUserSession : ()=> dispatch(checkUserSession())
})



export default connect(mapStateToProps, mapDispatchToProps)(App);

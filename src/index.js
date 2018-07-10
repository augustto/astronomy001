import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Logout from './components/Logout';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';



function isLoggedIn() {
    return localStorage.getItem('auth-token') === null;
  }

ReactDOM.render(
    (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/timeline/:login?" render={(props) => (
            isLoggedIn() ? ( 
              <Redirect to="/?msg=Você precisa estar logado para acessar o endereço"/>
            ) : (   
              <App {...props}/>
            )
          )}/>
  
        </Switch>
      </BrowserRouter>
    ),
    document.getElementById('root')
  );
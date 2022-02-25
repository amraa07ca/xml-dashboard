import React from 'react';
import { Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from 'react-redux';
import store from './store';

import RoutesWithNavigation from './components/RoutesWithNavigation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Styles
import './components/css/App.scss';
import './components/css/Base.scss';
import './components/css/EditAddModal.scss';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./login";
    }
}

const App = () => {
    return (
        <Provider store={store}>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <RoutesWithNavigation />
            </Switch>
        </Provider>
    );
};

export default App;

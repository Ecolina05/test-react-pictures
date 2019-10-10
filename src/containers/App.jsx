import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SplashScreen from '../components/SplashScreen';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, []);

    if (loading) {
        return <SplashScreen />
    } else {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/user/:userId-:username" component={Profile}/>
                    <Home />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
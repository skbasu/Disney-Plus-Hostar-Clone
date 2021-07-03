import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import TelevisionScreen from './screens/TelevisionScreen';
import MoviesScreen from './screens/MoviesScreen';
import DetailsScreen from './screens/DetailsScreen';
import BottomNav from './components/BottomNav';
import ProfileScreen from './screens/ProfileScreen';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeScreen />
            <BottomNav />
          </Route>
          <Route path='/tv'>
            <TelevisionScreen />
            <BottomNav />
          </Route>
          <Route path='/movies'>
            <MoviesScreen />
            <BottomNav />
          </Route>
          <Route path="/:endpoint/:id">
            <DetailsScreen />
            <BottomNav />
          </Route>
          <Route exact path="/profile">
            {
              user ? (
                <ProfileScreen />
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

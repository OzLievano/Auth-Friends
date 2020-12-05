import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation';
import LogIn from './components/LogIn';
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <PrivateRoute exact path="/friendslist" component={FriendsList}></PrivateRoute>
          <Route exact path="/login" component={LogIn}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

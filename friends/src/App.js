import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation';
import LogIn from './components/LogIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/login" component={LogIn}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

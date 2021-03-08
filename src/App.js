import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './Components/Header/CountryDetials/CountryDetails';

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
          </Route>
          <Route path='/home'>
            <Header />
          </Route>
          <Route path={`/details/:countryName`}>
            <CountryDetails></CountryDetails>
          </Route>
          <Route path='*'>
            <h3>404!!! page not found.</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Matches from './components/Matches';
import Stats from './components/Stats';
import useFetch from './components/useFetch';


const App = () => {
  
  let today = new Date();
  today = today.toISOString().split('T')[0];
  const API_KEY = process.env.REACT_APP_API_KEY;
  const options = {
    "method": "GET",
    "params": { market: 'classic', iso_date: today, federation: 'UEFA' },
    "headers": {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "football-prediction-api.p.rapidapi.com" }}
  // fetch predictions
  const { data: predictions, isLoading, error } = useFetch("https://football-prediction-api.p.rapidapi.com/api/v2/predictions", options)

  // fetch stats
  const { data: statsData} = useFetch("https://football-prediction-api.p.rapidapi.com/api/v2/performance-stats?market=classic", options)

  return (
          <Router>
            <Navbar today={today} />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/matches">
                  {predictions && <Matches predictions={predictions} isLoading={isLoading} error={error} />}
                </Route>
                <Route path="/stats">
                  {statsData && <Stats statsData={statsData}/> }
                </Route>
            </Switch>
          </Router>
      )}

export default App;

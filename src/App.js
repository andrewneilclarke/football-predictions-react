import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Matches from './components/Matches';
import Stats from './components/Stats';
import Picks from './components/Picks';
import useFetch from './components/useFetch';
import { projectFirestore } from './firebase/config';

const App = () => {
  const [predictions, setPredictions] = useState([
    {
      "id": 1,
      "first_name": "Jeanette",
      "last_name": "Penddreth",
      "email": "jpenddreth0@census.gov",
      "gender": "Female",
      "ip_address": "26.58.193.2"
    }, {
      "id": 2,
      "first_name": "Giavani",
      "last_name": "Frediani",
      "email": "gfrediani1@senate.gov",
      "gender": "Male",
      "ip_address": "229.179.4.212"
    }, {
      "id": 3,
      "first_name": "Noell",
      "last_name": "Bea",
      "email": "nbea2@imageshack.us",
      "gender": "Female",
      "ip_address": "180.66.162.255"
    }, {
      "id": 4,
      "first_name": "Willard",
      "last_name": "Valek",
      "email": "wvalek3@vk.com",
      "gender": "Male",
      "ip_address": "67.76.188.26"
    }
  ])

  let today = new Date().toISOString().split('T')[0];
  // let prevDate = new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split('T')[0];
  // console.log(today);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const options = {
    'method': 'GET',
    'params': { iso_date: today },
    'headers': {
      'x-rapidapi-key': API_KEY,
      // 'x-rapidapi-host': 'football-prediction-api.p.rapidapi.com'
      'x-rapidapi-host': 'random-api.p.rapidapi.com'

    }
  }

  // fetch predictions
  const { data: predictionsX, isLoading, error } = useFetch("https://pretendwebsite.com", options)
  // const { data: predictionsX, isLoading, error } = useFetch("https://football-prediction-api.p.rapidapi.com/api/v2/predictionsXX", options)

  // fetch stats
  const { data: statsData } = useFetch("https://pretendwebsite.com", options)
  // const { data: statsData } = useFetch("https://football-prediction-api.p.rapidapi.com/api/v2/performance-stats?market=classicXX", options)

  // set reference
  const ref = projectFirestore.collection('predictions')
  // console log data
  // console.log({ ...predictions })

  const postData = async () => {
    // await ref.add({ ...predictions })
    await projectFirestore.collection('predictions').add({ ...predictions })
    await projectFirestore.collection('lastApiCall').add({ today })
    // await projectFirestore.collection('messages').add(newMsg);
  }

  const getLastApiCall = async () => {
    let date;
    const lastApiCalls = await projectFirestore.collection('lastApiCall').get({ today })
    const lastApiServerCall = lastApiCalls.forEach(doc => {
      date = doc.data().today
    }
    )
    return date
    // console.log(lastApiServerCall)

    // lastApiCall.forEach(doc => {
    //   const lastApiServerCall = doc.data().today
    //   console.log(today === lastApiServerCall)
    //   if (today === lastApiServerCall) {
    //     return true
    //   }
    // })
    // return false
  }

  // post predictions on collection
  useEffect(() => {
    // predictions && setAllPredictions(predictions)
    const checkToday = async () => {
      const result = await getLastApiCall()
      console.log(result, today)
    }
    checkToday()
    // postData()
    // !getLastApiCall && postData()
  }, [])

  // post predictions on collection
  useEffect(() => {
    // getLastApiCall(today)
  }, [])

  return (
    <Router>
      <Navbar today={today} />
      <Switch>
        <Route exact path="/">
          <Home predictions={predictions} />
        </Route>
        <Route path="/matches">
          {predictions && <Matches predictions={predictions} isLoading={isLoading} error={error} />}
        </Route>
        <Route path="/picks">
          {predictions && <Picks predictions={predictions} isLoading={isLoading} error={error} />}
        </Route>
        <Route path="/stats">
          {statsData && <Stats statsData={statsData} />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

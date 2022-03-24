import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Matches from './components/Matches';
import Allmatches from './components/Allmatches';
import Stats from './components/Stats';
import Picks from './components/Picks';
import useFetch from './components/useFetch';
import { projectFirestore } from './firebase/config';
import useLocalStorage from './components/useLocalStorage';
import MyPicks from './components/MyPicks';

const App = () => {
  const [fbpredictions, setFbPredictions] = useState([{}])
  const [uptodate, setUptodate] = useState(null)
  const [valueData, setValueData] = useState([])
  const [allBets, setAllBets] = useLocalStorage('predictions', [])


  let today = new Date().toISOString().split('T')[0];
  // let prevDate = new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split('T')[0];

  const API_KEY = process.env.REACT_APP_API_KEY;

  const dailyBettingTipsURL = `https://daily-betting-tips.p.rapidapi.com/daily-betting-tip-api/items/daily_betting_tips?sort=-id`

  const options = {
    'method': 'GET',
    'headers': {
      "content-type": "application/json",
      "connection": "keep-alive",
      "x-rapidapi-host": "daily-betting-tips.p.rapidapi.com",
      "x-rapidapi-key": "b3e6ddd3b1msh9024c43f5d050d7p1bf5b6jsna7ff0fe242b2"
    },
  }

  // const { data: predictions, isLoading, error } = useFetch("https://football-prediction-api.p.rapidapi.com/api/v2/predictions", options)

  // fetch predictions
  // const { data: fetchedPredictions, isLoading, error } = (uptodate === true || uptodate === null) ? null : useFetch("https://pretendwebsite.com", options)
  // const { data: predictions, isLoading, error } = useFetch("https://football-prediction-api.p.rapidapi.com/api/v2/predictions", options)

  // fetch stats
  // const { data: fetchedStats } = useFetch("https://pretendwebsite.com", options)
  // const { data: fetchedStats } = useFetch("https://football-prediction-api.p.rapidapi.com/api/v2/performance-stats?market=classicXX", options)


  // set reference
  // const ref = projectFirestore.collection('predictions')
  // console log data
  // console.log({ ...predictions })

  // const postData = async () => {
  // await ref.add({ ...predictions })
  // await projectFirestore.collection('predictions').add({ ...predictions, today })
  // await projectFirestore.collection('lastApiCall').add({ today })
  // await projectFirestore.collection('messages').add(newMsg);
  // }

  const getLastApiCall = async () => {
    let date;
    const lastApiCalls = await projectFirestore.collection('predictions').get({ today })
    lastApiCalls.forEach(doc => console.log(doc.data().today))
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
  // console.log('local state: ', predictions)
  // console.log('fb data', fbpredictions)

  // const getPredictionsfromDB = async () => {
  //   let tempPredictions = [];
  //   const storedPredictions = await projectFirestore.collection('predictions').get()
  //   storedPredictions && storedPredictions.forEach(doc => tempPredictions.push(doc.data()))
  //   console.log(tempPredictions[0])
  //   setFbPredictions(tempPredictions[0])
  // }


  // useEffect(() => {
  //   if (uptodate === false) {
  //     FetchPredictionsfromAPI()
  //   }
  // }, [])

  // get predictions on page load

  // post predictions on collection
  // useEffect(() => {
  // getLastApiCall(today)
  // }, [])

  const fetchData = async () => {
    console.log('fetching from API!')
    try {
      const data = await fetch(dailyBettingTipsURL, options)
      const jsonData = await data.json();
      setAllBets(jsonData)
      console.table(jsonData)
      localStorage.setItem("predictions", JSON.stringify(jsonData))
    } catch (err) {
      console.log(err)
    }
  }

  // save fetched data
  // localStorage.setItem("predictions", JSON.stringify(allBets))

  // get fetched data from local storage
  // const savedData = JSON.parse(localStorage.getItem("predictions"))
  const dataArr = [...allBets.data].filter(item => item.match_status !== "pending")
  const filteredArr = dataArr.filter(item => item.match_status === "won")
  const addedArr = filteredArr.reduce((total, current, indx, arr) => {
    return total += parseFloat(current.odd_value) / arr.length
  }, 0)
  console.log(`up/down (all ${dataArr.length})`, addedArr.toFixed(2) * filteredArr.length - dataArr.length)
  // console.log(filteredArr.reduce((groupedDate, item) => {
  //   const date = item.match_date
  //   if (groupedDate[date] == null) groupedDate[date] = []
  //   groupedDate[date].push(item)
  //   return groupedDate
  // }, []
  // ))

  const highbets = dataArr.filter(item => parseFloat(item.odd_value) > 1.6)
  const highbetsthatwon = highbets.filter(bet => bet.match_status === 'won')
  const addedHighBets = highbetsthatwon.reduce((total, current, indx, arr) => {
    return total += parseFloat(current.odd_value) / arr.length
  }, 0)

  console.log(`up/down (high bets ${highbets.length})`, addedHighBets.toFixed(2) * highbetsthatwon.length - highbets.length)
  // console.log(highbets)

  // console.log(allBets)
  // get win / loss info
  // const getWinInfo = (dataArray) => {
  //   dataArray.reduce((winners, current) => winners + current.match_status === "won"
  //     , [])
  // }
  // const reducedArr = dataArr.reduce((winners, current) => {
  //   const won = current.match_status === "won"
  //   if (winners[won] === "lost") winners[won] = []
  //   winners[won].push(current)
  //   return winners
  // }, [])
  // console.log(reducedArr)

  useEffect(() => {
    fetchData()

  }, [today])

  // useEffect(() => {
  //   getdatafromlocalstorage()

  // }, [])


  return (
    // <Router>
    //   <Navbar today={today} />
    //   <Switch>
    //     <Route exact path="/">
    //       <Home predictions={predictions} />
    //     </Route>
    //     <Route path="/matches">
    //       {predictions && <Matches predictions={predictions} isLoading={isLoading} error={error} />}
    //     </Route>
    //     <Route path="/picks">
    //       {predictions && <Picks predictions={predictions} isLoading={isLoading} error={error} fbpredictions={fbpredictions} />}
    //     </Route>
    //     <Route path="/stats">
    //       {fetchedStats && <Stats fetchedStats={fetchedStats} />}
    //     </Route>
    //   </Switch>
    // </Router>
    <>
      {/* <Allmatches allBets={allBets.data} /> */}
      {/* <Highodds highbets={highbets} /> */}
      <MyPicks highbets={highbets} />
    </>

  )
}

export default App;

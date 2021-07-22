import { useState, useEffect } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Matches from './components/Matches';
import axios from 'axios';
import Totals from './components/Totals';

const App = () => {
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  let today = new Date();
  today = today.toISOString().split('T')[0];
  const API_KEY = process.env.REACT_APP_API_KEY;

  const options = {
    method: 'GET',
    url: 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions',
    params: { market: 'classic', iso_date: today, federation: 'UEFA' },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'football-prediction-api.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchPredictions = async () => {
      const res = await axios
        .request(options)
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      setPredictions(res.data.data);
      setisLoading(false);
    };
    fetchPredictions();
  }, []);

  // useEffect(() => {
  //   const fetchPredictions = async () => {
  //     const res = await axios({
  //       method: 'GET',
  //       url: `https://football-prediction-api.p.rapidapi.com/api/v2/predictions`,
  //       headers: {
  //         'x-rapidapi-key': API_KEY,
  //         'x-rapidapi-host': 'football-prediction-api.p.rapidapi.com',
  //       },
  //       params: { market: 'classic', iso_date: today, federation: 'UEFA' },
  //     });
  //     setPredictions(res.data.data);
  //     setisLoading(false);
  //   };
  //   fetchPredictions();
  // }, []);
  window.localStorage.setItem('data', JSON.stringify(predictions));
  return (
    <>
      {predictions.length > 0 && (
        <div className="container">
          <Header today={today} />
          <Totals predictions={predictions} />
          <Matches predictions={predictions} isLoading={isLoading} />
        </div>
      )}
    </>
  );
};

export default App;

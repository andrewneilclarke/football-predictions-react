import { useState, useEffect } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Matches from './components/Matches';
import axios from 'axios';

const App = () => {
  const [predictions, setPredictions] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchPredictions = async () => {
      const res = await axios({
        method: 'GET',
        url: `https://football-prediction-api.p.rapidapi.com/api/v2/predictions`,
        headers: {
          'x-rapidapi-key': 'b3e6ddd3b1msh9024c43f5d050d7p1bf5b6jsna7ff0fe242b2',
          'x-rapidapi-host': 'football-prediction-api.p.rapidapi.com',
        },
        params: { market: 'classic', iso_date: '2018-12-01', federation: 'UEFA' },
      });
      setPredictions(res.data);
      console.log(predictions);
      setisLoading(false);
    };
    fetchPredictions();
  }, []);
  return (
    <div className="container">
      <Header />
      <Matches isLoading={isLoading} predictions={predictions} />
    </div>
  );
};

export default App;

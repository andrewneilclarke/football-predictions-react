import { useState, useEffect } from "react";

const useFetch = (url, options) => {
    // state
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // fetch predictions
    useEffect(() => {
        fetch(url, options)
        .then(res => {
            if (!res.ok) {
            throw Error('Could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data => {
            console.log(data.data)
            setData(data.data)
            setisLoading(false)
        })
        .catch(err =>  {
            console.log(err.message)
            setisLoading(false)
            setError(err.message)
        })
        }, [url]);
        return { data, isLoading, error }
    }

export default useFetch;
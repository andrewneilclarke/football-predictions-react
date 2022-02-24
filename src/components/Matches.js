const matches = ({ predictions, isLoading, error }) => {
    return (

        <div className="matches">
            {error && <div>{error} </div>}
            {isLoading && <div>Loading...</div>}
            <h1>Matches</h1>
            <div className="predictions">
                {predictions && predictions.map((prediction) => (
                    <ul key={prediction.id}>
                        <li className="match" key={prediction.id}><span id="home">{prediction.home_team}</span><span> V </span> <span id="away">{prediction.away_team}</span><span id="prediction">{prediction.prediction} </span><span id="odds">{prediction.odds[prediction.prediction]}</span> <span id="status">{prediction.status}</span></li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default matches;

const MyPicks = ({ highbets, isLoading, error }) => {
    return (

        <div className="matches">
            {error && <div>{error} </div>}
            {isLoading && <div>Loading...</div>}
            <h1>My Picks</h1>
            <div className="predictions">
                {highbets && [...Object.values(highbets)].map(prediction => (
                    <ul key={prediction.id}>
                        <li className="match" key={prediction.id}>
                            <span id="date">{prediction.match_date} </span>
                            <span id="home">{prediction.id} {prediction.home_team}</span>
                            <span> V </span>
                            <span id="away">{prediction.away_team}</span>
                            <span id="prediction">{prediction.game_prediction === "Yes" || prediction.game_prediction === "No" ? `BTS ${prediction.game_prediction} ` : prediction.game_prediction}</span>
                            <span id="odds"> {prediction.odd_value}</span>
                            <span id="status"> {prediction.match_status}</span>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default MyPicks;

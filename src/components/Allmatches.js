const Allmatches = ({ allBets, isLoading, error }) => {
    return (

        <div className="matches">
            {error && <div>{error} </div>}
            {isLoading && <div>Loading...</div>}
            <h1>All Matches</h1>
            <div className="predictions">
                {allBets && [...Object.values(allBets)].map(prediction => (
                    <ul key={prediction.id}>
                        <li className="match" key={prediction.id}><span id="home">{prediction.home_team}</span><span> V </span> <span id="away">{prediction.away_team}</span><span id="prediction">{prediction.game_prediction} </span><span id="odds">{prediction.odd_value}</span> <span id="status">{prediction.match_status}</span></li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Allmatches;

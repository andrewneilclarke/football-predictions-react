const Picks = ({ predictions, isLoading, error }) => {
    const formattedPredictions = [...Object.values(predictions)]
    const picks = formattedPredictions.filter(prediction => prediction.odds[prediction.prediction] > 1.45)
    console.log(picks)

    return (
        <div className="matches">
            {error && <div>{error} </div>}
            {isLoading && <div>Loading...</div>}
            <h1>Picks</h1>
            <div className="predictions">
                {picks.map((pick) => (
                    <ul key={pick.id}>
                        <li className="match" key={pick.id}><span id="home">{pick.home_team}</span><span> V </span> <span id="away">{pick.away_team}</span><span id="prediction">{pick.prediction} </span><span id="odds">{pick.odds[pick.prediction]}</span> <span id="status">{pick.status}</span></li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Picks

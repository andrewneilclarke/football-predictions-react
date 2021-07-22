const matches = ( { predictions, isLoading }) => {
    return isLoading ? (
    <h1>Loading Predictions...</h1>
    ) : (
    <section className="cards">
        {predictions.map((prediction) => (
                <ul key={prediction.id}>
                    <li className="card" key={prediction.id}><span id="home">{prediction.home_team}</span> <span id="away">{prediction.away_team}</span><span id="prediction">{prediction.prediction} </span><span id="odds">{prediction.odds[prediction.prediction]}</span> <span id="status">{prediction.status}</span></li>
                </ul>
        ))}
    </section>
    )
}

export default matches;

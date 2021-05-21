const matches = ( { predictions, isLoading }) => {
    return isLoading ? (
    <h1>Loading Predictions...</h1>
    ) : (
    <section className="cards">
        {predictions}
        {predictions.map((prediction) => (
             <h4>{prediction.home_team}</h4>
             //{/* <h4>{prediction.home_team}</h4>
             //<h4>{prediction.away_team}</h4> */}
        ))}
    </section>
    )
}

export default matches;

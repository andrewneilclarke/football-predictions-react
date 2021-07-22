const Totals = ( { predictions } ) => {
    const numberofPredictions = predictions.length
    console.log(predictions)
    const totalOdds = predictions.reduce((total, match) => {
        console.log(`Total: ${total}`)
        console.log(`Match: ${match}`)
        return total + match.odds[match.prediction]
    }, 0)
   
    const averageOdds = totalOdds / numberofPredictions

    //     const numberofPredictions = predictions.length
    //     const totalOdds = predictions.reduce((total, odds) => {
    //         return total + odds.odds
    //     })
    //     return numberofPredictions, totalOdds, totalOdds / numberofPredictions
    // }
    // averageOdds();
    return (
        <>
        {predictions.length > 0 && <div>
            <p>Number of Predictions {numberofPredictions}</p>
            <p>Average Odds (today) {averageOdds}</p> 
        </div>}
        </>
    )
}

export default Totals

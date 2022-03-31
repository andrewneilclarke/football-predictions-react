const Totals = ({ highbets, totalBets, winLoss }) => {

    return (
        <div className="totals">
            <div>
                <h1>Bets</h1>
                <h2>{totalBets.toFixed()}</h2>
            </div>
            <div>
                <h1>Win / Loss (€1 stake)</h1>
                <h2>{winLoss.toFixed(2)}</h2>
            </div>

        </div>
    )
}

export default Totals

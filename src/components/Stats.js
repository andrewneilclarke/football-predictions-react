const Stats = ({ fetchedStats }) => {
    // const { accuracy, details } = statsData;
    // console.log(accuracy, details);
    console.log(fetchedStats)

    return (
        <div className="stats">
            <h1>Performance Statistics</h1>
            <div className="accuracy">
                <p>Yesterday  - <span> {(fetchedStats.accuracy.yesterday.toFixed(4) * 100).toFixed(2)}%</span></p>
                <p>Last 7 Days  - <span> {(fetchedStats.accuracy.last_7_days.toFixed(4) * 100).toFixed(2)}%</span></p>
                <p>Last 14 Days  - <span> {(fetchedStats.accuracy.last_14_days.toFixed(4) * 100).toFixed(2)}%</span></p>
                <p>Last 30 Days  - <span> {(fetchedStats.accuracy.last_30_days.toFixed(4) * 100).toFixed(2)}%</span></p>
            </div>
            <div className="details">
                <p>Yesterday  - <span> Total </span><span> {fetchedStats.details.yesterday.total} </span> <span> Won </span><span> {fetchedStats.details.yesterday.won} </span> <span> Lost </span><span> {fetchedStats.details.yesterday.lost} </span><span> Pending </span><span> {fetchedStats.details.yesterday.pending} </span><span> Postponed </span><span> {fetchedStats.details.yesterday.postponed} </span></p>
                <p>Last 7 Days  - <span> Total </span><span> {fetchedStats.details.last_7_days.total} </span> <span> Won </span><span> {fetchedStats.details.last_7_days.won} </span> <span> Lost </span><span> {fetchedStats.details.last_7_days.lost} </span> <span> Pending </span><span> {fetchedStats.details.last_7_days.pending} </span><span> Postponed </span><span> {fetchedStats.details.last_7_days.postponed} </span></p>
                <p>Last 14 Days  - <span> Total </span><span> {fetchedStats.details.last_14_days.total} </span> <span> Won </span><span> {fetchedStats.details.last_14_days.won} </span> <span> Lost </span><span> {fetchedStats.details.last_14_days.lost} </span><span> Pending </span><span> {fetchedStats.details.last_14_days.pending} </span><span> Postponed </span><span> {fetchedStats.details.last_14_days.postponed} </span></p>
                <p>Last 30 Days  - <span> Total </span><span> {fetchedStats.details.last_30_days.total} </span> <span> Won </span><span> {fetchedStats.details.last_30_days.won} </span> <span> Lost </span><span> {fetchedStats.details.last_30_days.won} </span><span> Pending </span><span> {fetchedStats.details.last_30_days.pending} </span><span> Postponed </span><span> {fetchedStats.details.last_30_days.postponed} </span></p>
            </div>
        </div>

    )
}

export default Stats

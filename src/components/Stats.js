const Stats = ( { statsData } ) => {
    // const { accuracy, details } = statsData;
    // console.log(accuracy, details);
    console.log(statsData)
    
    return (
        <div className="stats">
            <h1>Performance Statistics</h1>
            <div className="accuracy">
                <p>Yesterday  - <span> {(statsData.accuracy.yesterday.toFixed(4) * 100).toFixed(2)}%</span></p>
                <p>Last 7 Days  - <span> {(statsData.accuracy.last_7_days.toFixed(4) * 100).toFixed(2)}%</span></p>
                <p>Last 14 Days  - <span> {(statsData.accuracy.last_14_days.toFixed(4) * 100).toFixed(2)}%</span></p>
                <p>Last 30 Days  - <span> {(statsData.accuracy.last_30_days.toFixed(4) * 100).toFixed(2)}%</span></p>
            </div>
            <div className="details">
                <p>Yesterday  - <span> Total </span><span> {statsData.details.yesterday.total} </span> <span> Won </span><span> {statsData.details.yesterday.won} </span> <span> Lost </span><span> {statsData.details.yesterday.lost} </span><span> Pending </span><span> {statsData.details.yesterday.pending} </span><span> Postponed </span><span> {statsData.details.yesterday.postponed} </span></p>
                <p>Last 7 Days  - <span> Total </span><span> {statsData.details.last_7_days.total} </span> <span> Won </span><span> {statsData.details.last_7_days.won} </span> <span> Lost </span><span> {statsData.details.last_7_days.lost} </span> <span> Pending </span><span> {statsData.details.last_7_days.pending} </span><span> Postponed </span><span> {statsData.details.last_7_days.postponed} </span></p>
                <p>Last 14 Days  - <span> Total </span><span> {statsData.details.last_14_days.total} </span> <span> Won </span><span> {statsData.details.last_14_days.won} </span> <span> Lost </span><span> {statsData.details.last_14_days.lost} </span><span> Pending </span><span> {statsData.details.last_14_days.pending} </span><span> Postponed </span><span> {statsData.details.last_14_days.postponed} </span></p>
                <p>Last 30 Days  - <span> Total </span><span> {statsData.details.last_30_days.total} </span> <span> Won </span><span> {statsData.details.last_30_days.won} </span> <span> Lost </span><span> {statsData.details.last_30_days.won} </span><span> Pending </span><span> {statsData.details.last_30_days.pending} </span><span> Postponed </span><span> {statsData.details.last_30_days.postponed} </span></p>
            </div>
        </div>
    
    )
    }

export default Stats

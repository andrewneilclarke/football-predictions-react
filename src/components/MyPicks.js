import { DetailsList } from '@fluentui/react';
// import 'office-ui-fabric-react/dist/css/fabric.css';

const MyPicks = ({ highbets, isLoading, error }) => {
    console.log(highbets)
    const columns = [
        { key: 'column1', name: 'Date', fieldName: 'match_date', minWidth: 100, maxWidth: 300, isResizable: true },
        { key: 'column2', name: 'Home', fieldName: 'home_team', minWidth: 100, maxWidth: 300, isResizable: true },
        { key: 'column3', name: 'Away', fieldName: 'away_team', minWidth: 100, maxWidth: 300, isResizable: true },
        { key: 'column4', name: 'Prediction', fieldName: 'game_prediction', minWidth: 100, maxWidth: 300, isResizable: true },
        { key: 'column5', name: 'Odds', fieldName: 'odd_value', minWidth: 100, maxWidth: 300, isResizable: true },
        { key: 'column6', name: 'Status', fieldName: 'match_status', minWidth: 100, maxWidth: 300, isResizable: true },
    ]

    return (
        <>  <h1 className="title">My Picks</h1>
            <DetailsList items={highbets} columns={columns} />
        </>
        // <div className="matches">
        //     {error && <div>{error} </div>}
        //     {isLoading && <div>Loading...</div>}
        //     <h1>My Picks</h1>
        //     <div className="predictions">
        //         {highbets && [...Object.values(highbets)].map(prediction => (
        //             <ul key={prediction.id}>
        //                 <li className="match" key={prediction.id}>
        //                     <span id="date">{prediction.match_date} </span>
        //                     <span id="home">{prediction.id} {prediction.home_team}</span>
        //                     <span> V </span>
        //                     <span id="away">{prediction.away_team}</span>
        //                     <span id="prediction">{prediction.game_prediction === "Yes" || prediction.game_prediction === "No" ? `BTS ${prediction.game_prediction} ` : prediction.game_prediction}</span>
        //                     <span id="odds"> {prediction.odd_value}</span>
        //                     <span id="status"> {prediction.match_status}</span>
        //                 </li>
        //             </ul>
        //         ))}
        //     </div>
        // </div>
    )
}

export default MyPicks;

import { Link } from 'react-router-dom'

const Navbar = ({ today }) => {
  return (
    <nav className="nav-bar">
        <h1 className="title">Free Football Predictions - {today}</h1>
        <span>Powered by<a href="https://boggio-analytics.com/" target="_blank" rel="noreferrer">boggio-analytics</a></span>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/matches">Matches</Link>  
            <Link to="/stats">Stats</Link>                  
          </div>
    </nav>
  );
};

export default Navbar;

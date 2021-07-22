import Totals from './Totals';

const Header = ({ today, predictions }) => {
  return (
    <div>
      <h1 className="title">Football Predictions - {today}</h1>
      <Totals predictions={predictions} />
    </div>
  );
};

export default Header;

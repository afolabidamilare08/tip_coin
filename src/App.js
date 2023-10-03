import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage';
import StatsPage from './pages/statPage';

function App() {

  return (

    <div className='tipCoin' >

      <div className="tipCoin-header">

      <div className="header-left">

          <Link to="/" className="header-leftName">Tip Coin</Link>

          <div className="header-leftLinks">
              <Link to="/stats" className="links">STATS</Link>
              <Link to="#" className="links">MENTIONS</Link>
              <Link to="#" className="links">CLAIM</Link>
              <Link to="#" className="links">REVENUE</Link>
          </div>

      </div>

      <button className="log-out">LOGOUT</button>
      </div>

      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='/stats' element={ <StatsPage/> } />
      </Routes>

    </div>

  );
}

export default App;

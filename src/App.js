import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import HomePage from './Components/HomePage/HomePage';
import DriftPage from './Components/DriftPage/DriftPage';
import TimeAttackPage from './Components/TimeAttackPage/TimeAttackPage';
import ForzaPage from './Components/ForzaPage/ForzaPage';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className='page'>
          <Routes>
            <Route path='/' exact element={<HomePage/>} />
            <Route path='/drift' element={<DriftPage/>} />
            <Route path='/timeattack' element={<TimeAttackPage/>} />
            <Route path='/forza' element={<ForzaPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

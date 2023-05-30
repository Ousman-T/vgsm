import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './pages/About';
import New from './pages/New'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/new' element={<New />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

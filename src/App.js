import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Shop from './pages/shop';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;

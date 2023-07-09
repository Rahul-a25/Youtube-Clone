import logo from './logo.svg';
import './App.css';
// import Navbar from './component/Navbar/Navbar';
import CardUi from './component/Card/CardUi';
import Home from './component/Card/Home';
import { Routes,Route } from 'react-router-dom';
import CardDetails from './component/Card/CardDetails';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/carddetails/:id' element={<CardDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

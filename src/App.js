
import './App.css';
import Home from './component/Card/Home';
import { Routes,Route } from 'react-router-dom';
import CardDetails from './component/Card/CardDetails';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/carddetails/:id' element={<CardDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

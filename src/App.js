import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Diseases from './components/Diseases';
import SpecificDisease from './components/SpecificDisease';

function App() {
  return (
    <div className=" bg-emerald-50 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> }  />
          <Route path='/diseases' element={<Diseases /> }  />
          <Route path='/diseases/:name' element={<SpecificDisease /> }  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

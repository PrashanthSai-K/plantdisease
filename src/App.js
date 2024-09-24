import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Diseases from './components/Diseases';

function App() {
  return (
    <div className=" bg-emerald-50 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> }  />
          <Route path='/diseases' element={<Diseases /> }  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

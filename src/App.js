import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Diseases from './components/Diseases';
import FruitDetail from './components/FruitDetail';
import VegetableDetail from './components/VegetableDetail';

function App() {
  return (
    <div className=" bg-emerald-50 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> }  />
          <Route path='/diseases' element={<Diseases /> }  />
          <Route path='/diseases/fruits/:id' element={<FruitDetail /> }  />
          <Route path='/diseases/vegetable/:id' element={<VegetableDetail /> }  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

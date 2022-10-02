import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Seosonoffers from './offerpages/Seosonoffers';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/seosonoffers' element={<Seosonoffers/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;

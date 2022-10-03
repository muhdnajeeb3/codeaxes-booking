import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Seosonoffers from './offerpages/Seosonoffers';
import Home from './pages/Home';
import Search from './search/Search';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/seosonoffers' element={<Seosonoffers/>} />
      <Route exact path='/search' element={<Search/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;

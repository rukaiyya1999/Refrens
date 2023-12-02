import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SerchContextProvider from './Context/SerchContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <SerchContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </SerchContextProvider>
  );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Login from './component/Login/Login';
import Restuarant from './component/Restuarant/Restuarant';

function App() {
  return (
    <BrowserRouter >
    <Navbar />
        <Routes>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/restuarant' element={<Restuarant/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

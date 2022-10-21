
import './Style.css';
import { NavBar } from './components/navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/login/Login.jsx';
import Home from './pages/Home';
import { ProductoScreen } from './pages/ProductoScreen';


function App() {
  return (
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <NavBar/>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/signup' element={<Login/>}/>
                  <Route path='/product/:subname' element={<ProductoScreen/>}/>
                </Routes>
            </header>
          </div>
        </BrowserRouter>
  );
}

export default App;

import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Market from './Components/Market';
import Notfound from './Components/Notfound';
import Productpage from './Components/Productpage';

function App() {
  return (
    <Router>
      
    <div className="App">

      <Nav />
      
      <Routes>
        <Route element={<Home />} path='/'> </Route>
        <Route element={<Market />} path='/market'></Route>
        <Route element={<Productpage />}  path='/product/:id'></Route>
        <Route element={<Notfound />} path='*'></Route>
      </Routes>
    
    
     <Footer />


    
    </div>
    
    </Router>
  );
}

export default App;

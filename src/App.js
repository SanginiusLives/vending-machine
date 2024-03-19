import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Poptarts from './PopTarts';
import Popcorn from './Popcorn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<VendingMachine/>}/>
                <Route path="/chips" element={<Chips/>}/>
                <Route path="/poptarts" element={<Poptarts/>}/>
                <Route path="/popcorn" element={<Popcorn/>}/>
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;

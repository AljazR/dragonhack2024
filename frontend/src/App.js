// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import NavbarRouter from "./pages/NavbarRouter";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Dolzniki from "./pages/Dolzniki";
import Dodaj from "./pages/Dodaj";

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Navbar />
      </header>

      <body>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dodaj" element={<Dodaj />} />
            <Route path="/dolzniki" element={<Dolzniki />} />
          </Routes>
      </BrowserRouter>

      </body>

    </div>
  );
}

export default App;

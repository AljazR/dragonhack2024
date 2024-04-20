// import logo from './logo.svg';
import './App.css';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
// import Home from "./pages/Home";
import Dolzniki from "./pages/Dolzniki";
import Dodaj from "./pages/Dodaj";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* <Navbar /> */}
      </header>




      <body>

        

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="dodaj-dolznika" element={<Dodaj />} />
            <Route path="dolzniki" element={<Dolzniki />} />

            {/* <Route path="*" element={<NoPage />} /> */}
          
        </Routes>
      </BrowserRouter>

        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </body>




    </div>
  );
}

export default App;

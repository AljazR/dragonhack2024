// import logo from './logo.svg';
import './App.css';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";

import NavbarRouter from "./pages/NavbarRouter";
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



        {/* <Navbar />
        <>
          <Navbar />
        </> */}
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

              {/* <Route path="/" element={<Dodaj />} /> */}
              {/* <Route path="dodaj-dolznika" element={<Dodaj />} /> */}
              <Route path="/dolzniki" element={<Dolzniki />} />

              {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route>   */}
        </Routes>

      </BrowserRouter>

        {/* <div>
          <Navbar />
        </div> */}
        {/* <Dodaj /> */}
        

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

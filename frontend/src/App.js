// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarTrigger,
// } from "@/components/ui/menubar"


// import NavbarRouter from "./pages/NavbarRouter";
// import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Dolzniki from "./pages/Dolzniki";
import Dodaj from "./pages/Dodaj";
// import NavMeni from './pages/NavMeni';
import MyNavbar from './pages/MyNavbar';

// import { Button } from "./components/ui/button"


function App() {
  return (
    <div className="App">
      
      <header>
       
      </header>

      <body>

      <MyNavbar />

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

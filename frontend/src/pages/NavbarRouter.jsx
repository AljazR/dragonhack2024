import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
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
        
      
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dolzniki">Aktivni dolžniki</Link>
            </li>
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
  
        
      <Outlet />
      </>
      </header>
    )
  };
  
  export default Navbar;
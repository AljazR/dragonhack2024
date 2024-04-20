// import { a } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/dolzniki">Aktivni dolžniki</a>
          </li>
          {/* <li>
            <a to="/contact">Contact</a>
          </li> */}
        </ul>
      </nav>

      {/* <Outlet /> */}
    </>
  )
};

export default Navbar;

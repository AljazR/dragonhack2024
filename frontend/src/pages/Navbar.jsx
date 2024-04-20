// import { a } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (

    // https://getbootstrap.com/docs/4.0/components/navbar/
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Page 1-1</a></li>
              <li><a href="#">Page 1-2</a></li>
              <li><a href="#">Page 1-3</a></li>
            </ul>
          </li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
        </ul>
      </div>
    </nav> 

    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <a href="/">Home</a>
    //       </li>
    //       <li>
    //         <a href="/dolzniki">Aktivni dolžniki</a>
    //       </li>
    //       {/* <li>
    //         <a to="/contact">Contact</a>
    //       </li> */}
    //     </ul>
    //   </nav>

    // </>
  )
};

export default Navbar;

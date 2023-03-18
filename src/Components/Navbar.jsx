import { NavLink } from "react-router-dom";

const Navbar=()=>{
return<>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <NavLink to="/" className="navbar-brand" href="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active me-4 fw-bold"href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-4 fw-bold"href="#">AboutUs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-4 fw-bold"href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-4 fw-bold"href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-4 fw-bold" href="#">Register</a>
        </li>
        </ul>
    </div>
  </div>
</nav>





</>

}
export default Navbar;
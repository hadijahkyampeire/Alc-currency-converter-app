import React from 'react';

const Navbar=()=>(
<div>
<nav className="navbar navbar-expand-lg navbar-light nav">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Currency Converter App <span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
</div>
)
export default Navbar;
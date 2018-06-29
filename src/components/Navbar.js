import React from 'react';

const Navbar=()=>(
<div>
<nav class="navbar navbar-expand-lg navbar-light nav">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Currency Converter App <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
</div>
)
export default Navbar;
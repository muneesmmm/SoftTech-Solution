import React from 'react'
import '../Portfolios/style.css';
function Portfolios() {
    return (
        <div>
         <div class="container">

<div class="section-title">
  <h2>Portfolio</h2>
</div>

<div class="row" data-aos="fade-up">
  <div class="col-lg-12 d-flex justify-content-center">
    <ul id="portfolio-flters">
      <li data-filter="*" class="filter-active">All</li>
      <li data-filter=".filter-app">Designs</li>

      <li data-filter=".filter-web">Web</li>
    </ul>
  </div>
</div>
</div>
        </div>
    )
}

export default Portfolios

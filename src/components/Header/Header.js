import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-black clean-navbar">
            <div class="container"><Link to={'/'}><a class="navbar-brand logo">STS</a></Link><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav ml-auto mb-2">
                        <li class="nav-item"><Link to={'/'}><a class="nav-link active">Company</a></Link></li>
                        <li class="nav-item">
                            <Link to={'/services'}><a class="nav-link">Services</a></Link>
                        </li>
                        <li class="nav-item"><Link to={'/portfolio'}><a class="nav-link" href="pricing.html">Portfolio</a></Link></li>
                        <li class="nav-item"><a class="nav-link" href="about-us.html">About Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact-us.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;
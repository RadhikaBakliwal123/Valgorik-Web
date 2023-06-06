import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from './About'
import ContactUs from "./Contact";
import Sales from './Sales'
import ServiceCloud from './Servicecloud'
import Cpq from './Cpq'
import Heroq from './Heroku'
import Home from "./Home";
//import CompanyLogo from '../assets/img/ValgoLogo.png';

function Menus() {

    const HOME_PAGE = "/"
    const ABOUT_US_PAGE = "/aboutUS";
    const CONTACT_US_PAGE = "/contactUs"
    const SALES_CLOUD_PAGE = "/salesCloud";
    const SERVICE_CLOUD_PAGE = "/serviceCloud";
    const HEROKU_PAGE = "/heruko";
    const CPQ_PAGE = "/cpq";


    return (
        <div className="container-fluid">
            <nav id="navbar" className="navbar">
                <header id="header" className="d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                        <img src='' alt="Company Name..."/>
                    </div>
                    

                </header>
                <ul>
                    <li>
                        <Link classNameName="nav-link scrollto active" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="nav-link scrollto" to={ABOUT_US_PAGE}>About Us</Link>
                    </li>

                    <li>
                        <Link classNameName="nav-link scrollto" to={CONTACT_US_PAGE}>Contact Us</Link>
                    </li>

                    <li className="dropdown"><a href="/"><span> Product</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                            <li> <Link classNameName="dropdown-item" to={SALES_CLOUD_PAGE}>Sales</Link></li>
                            <li><Link classNameName="dropdown-item" to={SERVICE_CLOUD_PAGE}>Service Cloud</Link></li>
                            <li><Link classNameName="dropdown-item" to={HEROKU_PAGE}>Heroku</Link></li>
                            <li><Link classNameName="dropdown-item" to={CPQ_PAGE}>CPQ</Link></li>
                        </ul>
                    </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <Routes>
                <Route path={ABOUT_US_PAGE} element={<AboutUs />}></Route>
                <Route path={CONTACT_US_PAGE} element={<ContactUs/>}></Route>
                <Route path={SALES_CLOUD_PAGE} element={<Sales />}></Route>
                <Route path={SERVICE_CLOUD_PAGE} element={<ServiceCloud />}></Route>
                <Route path={CPQ_PAGE} element={<Cpq />}></Route>
                <Route path={HEROKU_PAGE} element={<Heroq />}></Route>
            </Routes>
        </div>

    );
}

export default Menus;

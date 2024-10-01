import React from "react";
import Photo from "../img/logo (1).png"
import '../../App.css'

import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="Header">
            <div className="container ">
                <nav className="Header__nav">
                    <Link className="Header__link" to="/">
                        <img className="Header__logo" src={Photo} alt="logo" />
                    </Link>
                    <ul className="Header__ul" >
                        <li className="Header__ul-li"> <a className='Header__ul-link' href="#">Наши Курсы</a> </li>
                        <li className="Header__ul-li"> <a className='Header__ul-link' href="#">+ 996 771 830 438</a></li>
                    </ul>
                </nav>
            </div>
            <div className="Header__line"></div>
        </header>
    )
}

export default Header


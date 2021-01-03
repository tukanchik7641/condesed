import React from 'react'
import '../css/components.css';
import logo from '../img/logo.png';
import ava from '../img/ava.jpg';
import HeaderRight from "./HeaderRight";

const Header = () => {
    return(
        <div className="header">
            <div className="header-left">
                <div className="header-logo">
                    <a href="/"><img src={logo} alt=""/></a>
                </div>
                <a href="/"><div className="header-names">
                    <span className="name">КОНДЕСЕД</span>
                    <span className="sub-name">КОЛЛЕКТИВНЫЕ БЛОГИ</span>
                </div></a>
            </div>
            <div className="header-center">
                <ul>
                    <li className="first"><a href="#">ТОП-100 ПУБЛИКАЦИИ</a></li>
                    <li><a href="#">КАТЕГОРИИ</a></li>
                    <li><a href="#">ИНТЕРЕСНОЕ</a></li>
                </ul>
            </div>
            <HeaderRight />
        </div>
    );
}

export default Header;
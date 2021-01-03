import React from 'react';
import '../css/components.css';
import logo from '../img/logo.png';

const Footer = () => {
    return(
        <div className="footer">
            <div className="brand">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="names">
                    <div className="namee">КОНДЕСЕД</div>
                    <div className="sub-namee">КОЛЛЕКТИВНЫЕ БЛОГИ</div>
                </div>
            </div>
            <div className="text">
                Если вы увидили что-то незаконное на нашем сайте, незамедлительно сообщите мне об этом по контактам внизу.
            </div>
        </div>
    );
}

export default Footer;
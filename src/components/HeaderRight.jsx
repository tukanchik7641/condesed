import React, { useState, useEffect } from 'react'
import '../css/components.css';
import logo from '../img/logo.png';
import ava from '../img/ava.png';

const HeaderRight = () => {

    const [user, setuser] = useState({ login: '', password: '' });

    useEffect(() => {
        var a = localStorage.getItem('myData');
        var b = JSON.parse(a);
        setuser(b)
    }, []);

    const storedData = localStorage.getItem('myData');
    if (!storedData) {
        return(
            <div className="header-right">
                <a href="/users/login"><div className="login">ВОЙТИ</div></a>
                <a href="/users/registration"><div className="registration">ЗАРЕГИСТРИРОВАТЬСЯ</div></a>
            </div>
        );
    }
    else {
        return(
            <a href="/myprofile"><div className="profile">
                <div className="ava">
                    <img src={ava} alt=""/>
                </div>

                <div className="data">
                    <div className="login">{user.login}</div>
                    <div className="type-user">Пользователь</div>
                </div>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2075 7.87415L11 12.0725L6.7925 7.87415L5.5 9.16665L11 14.6666L16.5 9.16665L15.2075 7.87415Z" fill="#6D6D6D"/>
                </svg>
            </div>
            </a>
        );
    }



    return(
        <div>
            ss
        </div>
    );
}

export default HeaderRight;
import React, { useState, useEffect } from 'react'
import ava from '../../img/ava.png';
const Profile = (props) => {

    const [user, setuser] = useState({ login: '', password: '' });

    useEffect(() => {
        var a = localStorage.getItem('myData');
        var b = JSON.parse(a);
        setuser(b)
    }, []);

    const storedData = localStorage.getItem('myData');

    console.log(storedData);

    function logout() {
        localStorage.removeItem('myData');
        window.location.href = '/';
    }

    return(
        <div className="main" id="profile">
            <div className="top">
                <div className="title-page">
                    <div className="title-page-text">Профиль</div>
                    <div className="title-page-line"/>
                </div>
                <div className="logout" id="logout" onClick={logout}>
                    Выйти
                </div>
            </div>
            <div className="prof-block">
                <div className="ava">
                    <a href="/"><img src={ava} alt=""/></a>
                </div>
                <form className="prof-form">
                    <div className="form-half">
                        <div className="form-box">
                            <label htmlFor="name">Имя:</label>
                            <input type="text" name="name" value={user.name}/>
                        </div>
                        <div className="form-box">
                            <label htmlFor="surname">Фамилия:</label>
                            <input type="text" name="surname" value={user.surname}/>
                        </div>
                    </div>
                    <div className="1col">
                        <div className="form-box">
                            <label htmlFor="login">Логин:</label>
                            <input type="text" name="login" value={user.login}/>
                        </div>
                        <div className="form-box">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" value={user.email}/>
                        </div>
                    </div>
                    <div className="1col">
                        <div className="form-box">
                            <label htmlFor="password">Пароль:</label>
                            <input type="password" name="password" value={user.password}/>
                        </div>
                        <div className="form-box">
                            <label htmlFor="pass2">Подтвердите пароль:</label>
                            <input type="password" value={user.password} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="button-box">
                <a href="/editprofile" className="accept-b">Изменить</a>
            </div>
        </div>
    );
}

export default Profile;
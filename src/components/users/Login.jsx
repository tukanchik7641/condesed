import React, { useEffect, useState } from "react";
import axios from 'axios';

const Login = (props) => {
    const [employee, setemployee] = useState({ login: '', password: ''});
    const apiUrl = "http://localhost:3000/auth";
    const Loginn = (e) => {
        e.preventDefault();
        debugger;
        let data = {login: employee.login, password: employee.password};
        axios.post(apiUrl, data)
            .then((result) => {
                debugger;
                console.log(result.data.Status);
                const serializedState = JSON.stringify(result.data.UserDetails);
                var a= localStorage.setItem('myData', serializedState);
                console.log("A:",a)
                const user =result.data.UserDetails;
                console.log(result.data.message);
                if (result.data.Status === 200) {
                    alert('Вы успешно авторизовались!');
                    window.location.href = '/';
                }
                else
                    alert('Пользователь не найден!');
            })
    };

    const onChange = (e) => {
        e.persist();
        debugger;
        setemployee({...employee, [e.target.name]: e.target.value});
    }

    return(
        <div className="main" id="login">
            <div className="title-page">
                <div className="title-page-text">Авторизация</div>
                <div className="title-page-line"/>
            </div>

            <form className="authorization" onSubmit={Loginn}>
                <div className="form-box">
                    <label htmlFor="username">Ваш логин:</label>
                    <input type="text" value={employee.login} onChange={ onChange } name="login" placeholder="Введите ваш логин..."/>
                </div>
                <div className="form-box">
                    <label htmlFor="username">Ваш пароль:</label>
                    <input type="password" value={employee.password} onChange={ onChange } name="password" placeholder="Введите ваш пароль..."/>
                </div>
                <div className="remember">
                    <input type="checkbox" id="remember_me" className="remember_me"/>
                    <label htmlFor="remember_me" id="remember-label">Запомнить меня</label>
                </div>
                <div className="button-box">
                    <button type="submit" className="accept-b">Войти</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
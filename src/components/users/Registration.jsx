import React, { useEffect, useState } from "react";
import axios from 'axios';

const Registration = (props) => {

    const [data, setdata] = useState({ name: '', surname: '', login: '', email: '', password: '' })
    const apiUrl = "http://localhost:3000/reg/";
    const Register = (e) => {
        console.log(data.name);

        if (data.name === '') {
            alert("Заполните все поля!");
            window.location.href = '/users/registration';
        } else if(data.surname === '') {
            alert("Заполните все поля!");
            window.location.href = '/users/registration';
        } else if(data.login === '') {
            alert("Заполните все поля!");
            window.location.href = '/users/registration';
        } else if(data.email === '') {
            alert("Заполните все поля!");
            window.location.href = '/users/registration';
        } else if(data.password === '') {
            alert("Заполните все поля!");
            window.location.href = '/users/registration';
        }

        else {
            e.preventDefault();
            debugger;
            const data1 = {
                name: data.name,
                surname: data.surname,
                login: data.login,
                email: data.email,
                password: data.password
            };
            axios.post(apiUrl, data1)
                .then((result) => {
                    debugger;
                    console.log(result.data);
                    if (result.data.Status === 'Invalid')
                        alert('Ошибка!');
                    else {
                        alert("Вы успешно зарегистрировались!");
                        props.history.push('/');
                    }
                })
        }
    }
    const onChange = (e) => {
        e.persist();
        debugger;
        setdata({ ...data, [e.target.name]: e.target.value });
    }



    return(
        <div className="main" id="reg">
            <div className="title-page">
                <div className="title-page-text">Регистрация</div>
                <div className="title-page-line"/>
            </div>

            <form className="registration" onSubmit={Register}>
                <div className="form-half">
                    <div className="form-box">
                        <label htmlFor="name">Ваше имя:</label>
                        <input type="text" onChange={onChange} value={data.name} name="name" placeholder="Введите ваше имя..."/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="surname">Ваша фамилия:</label>
                        <input type="text" onChange={onChange} value={data.surname} name="surname"  placeholder="Введите вашу фамилию..."/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="email">Ваш email:</label>
                        <input type="email" onChange={onChange} value={data.email} name="email"  placeholder="Введите ваш email..."/>
                    </div>
                </div>

                <div className="form-half form-half2">
                    <div className="form-box">
                        <label htmlFor="login">Ваш логин:</label>
                        <input type="text" onChange={onChange} value={data.login} name="login" placeholder="Введите ваш логин..."/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="username">Ваш пароль:</label>
                        <input type="password" onChange={onChange} value={data.password} name="password"  placeholder="Введите ваш пароль..."/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="username">Подтвердите пароль:</label>
                        <input type="password" id="confirm_password" placeholder="Подтвердите ваш пароль..."/>
                    </div>
                </div>
                <div className="remember">
                    <input type="checkbox" id="remember_me" className="remember_me"/>
                    <label htmlFor="remember_me" id="remember-label">Я принимаю условия <span className="agree_terms_text">Пользовательского соглашения</span></label>
                </div>
                <div className="button-box">
                    <button type="submit" className="accept-b">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}

export default Registration;
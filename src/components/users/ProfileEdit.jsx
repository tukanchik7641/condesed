import React, { useState, useEffect } from 'react'
import ava from '../../img/ava.png';
import axios from 'axios';

const ProfileEdit = (props) => {

    const [user, setuser] = useState({ login: '', password: '' });

    useEffect(() => {
        var a = localStorage.getItem('myData');
        var b = JSON.parse(a);
        setuser(b)
    }, []);

    const storedData = localStorage.getItem('myData');

    const [data, setdata] = useState({ name: '', surname: '', login: '', email: '', password: '' })
    const apiUrl = `http://localhost:3000/users/${user._id}`;
    const changeUser = (e) => {
        e.preventDefault();
        debugger;
        const data1 = { name: data.name, surname: data.surname, login: data.login, email: data.email, password: data.password };
        axios.put(apiUrl, data1)
            .then((result) => {
                debugger;
                console.log(result.data);
                if (result.data.Status === 200) {
                    alert('Вы успешно изменили данные! Зайдите в аккаунт заново');
                    localStorage.removeItem('myData');
                    window.location.href = '/';

                }
                else
                    alert('Ошибка!');
            })
    }
    const onChange = (e) => {
        e.persist();
        debugger;
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    return(
        <div className="main" id="profile">
            <div className="title-page">
                <div className="title-page-text">Профиль</div>
                <div className="title-page-line"/>
            </div>
            <div className="prof-block">
                <div className="ava">
                    <a href="/"><img src={ava} alt=""/></a>
                </div>
                <form className="prof-form" onSubmit={changeUser}>
                    <div className="form-half">
                        <div className="form-box">
                            <label htmlFor="name">Имя:</label>
                            <input type="text" name="name" onChange={onChange} value={data.name}/>
                        </div>
                        <div className="form-box">
                            <label htmlFor="surname">Фамилия:</label>
                            <input type="text" name="surname" onChange={onChange} value={data.surname}/>
                        </div>
                    </div>
                    <div className="1col">
                        <div className="form-box">
                            <label htmlFor="login">Логин:</label>
                            <input type="text" name="login" onChange={onChange} value={data.login}/>
                        </div>
                        <div className="form-box">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" onChange={onChange} value={data.email}/>
                        </div>
                    </div>
                    <div className="1col">
                        <div className="form-box">
                            <label htmlFor="password">Пароль:</label>
                            <input type="password" name="password" onChange={onChange} value={data.password}/>
                        </div>
                        <div className="form-box">
                            <label htmlFor="pass2">Подтвердите пароль:</label>
                            <input type="password"/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="button-box">
                <button type="submit" onClick={changeUser} className="accept-b">Сохранить</button>
            </div>
        </div>
    );
}

export default ProfileEdit;
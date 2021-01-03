import React, { Component } from 'react';
import './css/reset.css';
import './css/main.css';
import './css/components.css';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import UnderFooter from "./components/UnderFooter";
import Home from "./components/Home";
import Login from './components/users/Login'
import Registration from "./components/users/Registration";
import Profile from "./components/users/Profile";
import Donate from "./components/Donate";
import ava from './img/ava.jpg';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Publication from "./components/Publication";
import ProfileEdit from "./components/users/ProfileEdit";
import CreatePost from "./components/users/CreatePost";


class App extends Component {

    /*state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }*/




    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className="contentt">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/donate' component={Donate}/>
                            <Route path='/users/login' component={Login}/>
                            <Route path='/users/registration' component={Registration}/>
                            <Route path='/myprofile' component={Profile}/>
                            <Route path='/editprofile' component={ProfileEdit}/>
                            <Route path='/publications/d12di33slm' component={Publication}/>
                            <Route path='/posts/new/' component={CreatePost}/>
                        </Switch>
                        <Sidebar/>
                    </div>
                    <Footer/>
                    <UnderFooter/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
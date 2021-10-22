import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import "./login.css";

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    
    const changeHandler = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
            //штука, позволяет вытаскивать внутренности из массивов и объектов, чтобы мы ими пользовались
        });
        console.log(form);
        
    }

    const registrationHandler =  (userId, password) => {
        let users = JSON.parse(localStorage.getItem("users"));
        if(!users){
            console.log('!');
            users = [];
        }

        let isExist = false;

        users.forEach(element => {
            if(element.userId === userId){
                isExist = true;
            }

        });
        
        if(!isExist){
            console.log('!');
            users.push({userId: userId, password: password});
            localStorage.setItem("users", JSON.stringify(users));
        }
        else{
            console.log("allready exist");
        }
        console.log(users);
    }

    return (
        <BrowserRouter>
            <Switch>
                <React.Fragment>
                    <div className="container">
                        <div className="auth-page">
                            <Route path="/Aut/login">
                                <h4 align="center">Вход</h4>
                                <form className="form form-login">
                                    <div className="collum" display="table">
                                        <div className="input-field col s12" >
                                            <label htmlFor="email" className="login">Логин</label>
                                            <input type="email" name="email" className="validate" onChange={changeHandler}/>
                                        </div>
                                        <div className="input-field col s12">
                                            <label htmlFor="password" className="login">Пароль</label>
                                            <input type="password" name="password" className="validate"  onChange={changeHandler}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="wawes-effect wawes-light btn blue">
                                            Войти
                                        </button>
                                        <Link to="/Aut/registration" className="btn-outline btn-reg">Зарегаться?</Link>
                                    </div>
                                </form>
                            </ Route>

                            <Route path="/Aut/registration">
                                <h4 align="center">Регистрация</h4>
                                <form className="form form-login" >
                                    <div className="collum">
                                        <div className="input-field col s12">
                                            <label htmlFor="email" className="login">Логин</label>
                                            <input type="email" name="email" className="validate" onChange={changeHandler}/>
                                        </div>
                                        <div className="input-field col s12">
                                            <label htmlFor="password" className="login">Пароль</label>
                                            <input type="password" name="password" className="validate" onChange={changeHandler}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="wawes-effect wawes-light btn blue" onClick={registrationHandler} href="/Login">
                                            Регистрация
                                        </button>
                                        <Link to="/Aut/login" className="btn-outline btn-reg">Войти?</Link>
                                    </div>
                                </form>
                            </Route>
                        </div>
                    </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    );
}
    
export default Login;
import React from 'react';
import { MyButton } from '../components/UI/button/MyButton';
import { MyInput } from '../components/UI/input/MyInput';
import { useContext } from 'react';
import { AuthContext } from '../context';


export const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = event => {
        //prevents to reaload Page
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div>
            <h1> page for Login </h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='username' />
                <MyInput type="password" placeholder='password' />
                <MyButton>login</MyButton>
            </form>
        </div>
    )
}

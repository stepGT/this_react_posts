import React from 'react'
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
    const { isAuth, setIsAuth } = React.useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(!isAuth);
        localStorage.setItem('auth', 'true');
    };
    return (
        <div>
            <form onSubmit={login}>
                <MyInput placeholder='Login' type='text' />
                <MyInput placeholder='Password' type='password' />
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}
export default Login;
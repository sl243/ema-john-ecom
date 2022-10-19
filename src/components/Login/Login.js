import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import './Login.css'

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // user sign in
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label className="label">Email</label>
                    <input type="email" name='email' placeholder=" Enter Your Email Address" required />
                </div>
                <div className='form-control'>
                    <label className="label">Password</label>
                    <input type="password" name='password' placeholder="Enter Your Password" required />
                </div>
                <button className="btn-submit btn btn-secondary">Login</button>
            </form>
            <p>New to Ema john? <Link to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;
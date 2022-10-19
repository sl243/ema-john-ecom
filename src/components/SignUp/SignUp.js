import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import './SignUp.css'

const SignUp = () => {

    const [error, setError] = useState(null);
    const { userCreate, googleSignUp } = useContext(AuthContext);

    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.target;

        const email = event.target.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(password, email, confirm)

        if (password < 6) {
            setError('Your Should be 6 Character or more')
            return;
        }
        if (password !== confirm) {
            setError('password did not match!');
            return;
        }

        // user create firebase authentication
        userCreate(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        googleSignUp()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder="Email Address" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder="Password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder="Confirm Password" required />
                </div>
                <p className='error-password'>{error}</p>
                <button className="btn-submit btn btn-secondary">Sign Up</button>
            </form>
            <button onClick={handleGoogleSignIn} className="btn-submit btn btn-secondary">Google Sign Up</button>
            <p>Already Have Account? <Link to='/login'>login</Link></p>

        </div>
    );
};

export default SignUp;
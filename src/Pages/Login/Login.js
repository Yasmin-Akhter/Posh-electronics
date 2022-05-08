import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/');
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Please Login</h1>
            <form onSubmit={handleLogin}>
                <input className='mb-2' type="email" name='email' placeholder='Email' required />
                <br />
                <input className='mb-2' type="password" name='password' placeholder='Password' required />
                <br />

                <input className='mb-2' type="submit" value="Submit" />
            </form>
            <p>Don't have account? <span><Link to="/signup"> Sign Up</Link></span></p>
            <div className='d-flex  w-50 mx-auto'>
                <div style={{ width: '200px' }} className='mx-3'>
                    <hr />
                </div>
                <div>
                    <p>Or</p>
                </div>
                <div style={{ width: '200px' }} className='mx-3'>
                    <hr />
                </div>
            </div>
            <input className='mb-5' onClick={() => signInWithGoogle()} type="button" value="Sign in with Google" />


        </div >
    );
};

export default Login;
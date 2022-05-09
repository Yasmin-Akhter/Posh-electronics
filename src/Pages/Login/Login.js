import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const [email, setEmail] = useState('');

    let from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;

        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
        setEmail(email);
        toast('signing in');
        e.target.reset();
    }
    const handlePasswordReset = () => {
        sendPasswordResetEmail(email);
        toast('Sent email');

    }

    if (user) {
        navigate(from, { replace: true });

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
            <p>Forgot password? <span><button className='btn btn-link' onClick={handlePasswordReset}> Reset password</button></span></p>
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
            <ToastContainer />


        </div >
    );
};

export default Login;
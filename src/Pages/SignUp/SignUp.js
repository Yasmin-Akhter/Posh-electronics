import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignUp = () => {
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth);


    const handleSignup = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const confirmPass = e.target.confirmPassword.value;
        console.log(pass, confirmPass);

        createUserWithEmailAndPassword(email, pass);


        if (pass.length < 6) {
            setError('X Password must be more then six digit X')
        }
        if (pass !== confirmPass) {
            setError(' X Password and confirm password must be same X');
        }
        e.target.reset();
    }
    if (user) {
        navigate('/');
    }




    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input className='mb-2' type="text" name='name' placeholder='Name' required /> <br />
                <input className='mb-2' type="email" name='email' placeholder='Email' required />
                <br />
                <input className='mb-2' type="password" name='password' placeholder='Password' required /> <br />

                <input className='mb-2' type="password" name='confirmPassword' placeholder='Confirm Password' required />
                <br />
                <div className='text-danger'>
                    {error} <br />
                </div>
                <input className='mb-2' type="submit" value="Submit" />
            </form>
            <p>Already have an account? <span><Link to="/login">Login </Link></span></p>
        </div>
    );
};

export default SignUp;
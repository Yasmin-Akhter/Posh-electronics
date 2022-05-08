import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    let errorMsg;
    const handleSignup = e => {
        e.preventDefault();
        const pass = e.target.password.value;
        const confirmPass = e.target.confirmPassword.value;
        console.log(pass, confirmPass);

        if (pass !== confirmPass) {
            errorMsg = 'Password and confirm password must be same';
        }
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
                {errorMsg}
                <input className='mb-2' type="submit" value="Submit" />
            </form>
            <p>Already have an account? <span><Link to="/login">Login </Link></span></p>
        </div>
    );
};

export default SignUp;
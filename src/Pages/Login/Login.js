import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
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


        </div >
    );
};

export default Login;
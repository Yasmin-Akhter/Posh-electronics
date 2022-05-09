import React from 'react';
import './Footer.css';

const Footer = () => {
    let v = new Date().getFullYear();

    return (

        <div>

            <div style={{ flexGrow: "1" }}></div>
            <footer className='position-bottom mt-5 '>
                <p className='mt-2'>Copyright@<span>{v}</span> posh electronics;</p>
            </footer>
        </div >

    );
};

export default Footer;
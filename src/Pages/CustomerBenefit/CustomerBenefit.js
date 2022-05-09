import React from 'react';
import './CustomerBenefit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileWord, faHand, faPerson, faTruck } from '@fortawesome/free-solid-svg-icons'

const CustomerBenefit = () => {
    return (
        <div className='my-5'>
            <h1>Customer Benefit</h1>
            <p>Our objective is to Reduce our clients overall Logistics Cost and Increase their Customer Order Servicability</p>
            <div className='mx-auto mb-5' style={{ width: '300px' }}> <hr style={{ width: '300px', color: 'blue', height: '5px' }}></hr></div>
            <div className='row customer-benefit'>
                <div className='col-lg-6 col-sm-12'>
                    <img className='img-fluid' style={{ height: '300px' }} src="https://www.moulton.ac.uk/assets/images/Construction/_1200x630_crop_center-center_82_none/iStock-1180336584.jpg?mtime=1590679401" alt="" />
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div className='benefit-details'>
                        <div>
                            <h5>< FontAwesomeIcon icon={faPerson} className='rounded-circle bg-secondary p-1' style={{ color: 'skyblue' }}></FontAwesomeIcon> PROFESSIONAL STAFF</h5>
                            <p>Our employee engaged in work predominantly intellectual and varied in character</p>
                        </div>
                        <div>
                            <h5>< FontAwesomeIcon icon={faTruck} className='rounded-circle bg-secondary p-1' style={{ color: 'skyblue' }}></FontAwesomeIcon> DISTRIBUTION and DELIVERY</h5>
                            <p>We provide home delivery service according to our customer's demand.</p>
                        </div>
                        <div>
                            <h5>< FontAwesomeIcon icon={faFileWord} className='rounded-circle bg-secondary p-1' style={{ color: 'skyblue' }}></FontAwesomeIcon> CONTINUOUS FOCUS</h5>
                            <p>You can easily trust on us for safe and sequre product delivery.</p>
                        </div>
                        <div>
                            <h5>< FontAwesomeIcon icon={faHand} className='rounded-circle bg-secondary p-1' style={{ color: 'skyblue' }}></FontAwesomeIcon>LIFETIME SERVICING</h5>
                            <p>We provide lifetime servicing service to our valuable customers</p>
                        </div>

                    </div>

                </div>

            </div>
        </div >
    );
};

export default CustomerBenefit;
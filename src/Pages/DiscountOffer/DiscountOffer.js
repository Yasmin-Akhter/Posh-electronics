import React from 'react';
import './DiscountOffer.css'

const DiscountOffer = () => {
    return (
        <div className='row discount my-5'>
            <div className="col-lg-6 col-sm-12">
                <p className='mt-5'><span style={{ fontSize: '40px', color: 'white' }}>Grab <span style={{ fontSize: '50px', color: 'blue' }}>25% </span> discount</span><span style={{ fontSize: '40px', color: 'white' }}> on first purchase for our membership customers</span></p></div>
            <div className="col-lg-6 col-sm-12 ">
                <img className='img-fluid' src="https://previews.123rf.com/images/blankstock/blankstock1905/blankstock190501042/122776685-sale-tag-25-discount-sale-offer-price-sign-special-offer-symbol-shopping-banner-market-offer-vector.jpg" alt="" />
            </div>

        </div>



    );
};

export default DiscountOffer;
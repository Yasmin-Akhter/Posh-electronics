import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Carousel fade >
                <Carousel.Item>
                    <img style={{ height: '500px', width: '1066px' }}
                        className="d-block mx-auto "
                        src="https://ao.com/~/media/Content-Hub/Brand-shops/Samsung/SamsungLaundryHeader.ashx"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='slider-title'>Welcome to Posh Electronics</h1>
                        <p className='text-black'>We are here to make your lifestyle posh</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px', width: '1066px' }}
                        className="d-block mx-auto"
                        src="https://reviewed-com-res.cloudinary.com/image/fetch/s--Qd48D7_9--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1567525241382/titanium-electrolux-front-load-washers-efls527utt-77_1000.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='slider-title'>Welcome to Posh Electronics</h1>
                        <p className='text-black'>We are here to make your lifestyle posh</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px', width: '1066px' }}
                        className="d-blockmx-auto"
                        src="https://images.samsung.com/is/image/samsung/p5/nz/samsung-care/samsung-care-washing-mob.jpg?$ORIGIN_JPG$"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='slider-title'>Welcome to Posh Electronics</h1>
                        <p className='text-black'>We are here to make your lifestyle posh </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
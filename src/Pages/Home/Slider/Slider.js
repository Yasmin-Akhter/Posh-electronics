import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Carousel fade >
                <Carousel.Item>
                    <img style={{ height: '400px' }}
                        className="d-block mx-auto "
                        src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-99-household-appliances-big-promotion-carnival-blue-banner-image_166711.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='slider-title'>Welcome to Posh Electronics</h1>
                        <p className='text-black'>We are here to make your lifestyle posh</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '400px' }}
                        className="d-block mx-auto"
                        src="https://cdn.risingbd.com/media/imgAll/2017January/bg/Walton-Home-Appliances20170112095505.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='slider-title'>Welcome to Posh Electronics</h1>
                        <p className='text-black'>We are here to make your lifestyle posh</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '400px' }}
                        className="d-blockmx-auto"
                        src="https://www.pngitem.com/pimgs/m/564-5645524_transparent-electronics-home-appliance-transparent-home-appliances-png.png"
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
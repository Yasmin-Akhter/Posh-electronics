import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Carousel fade >
                <Carousel.Item>
                    <img style={{ height: '400px' }}
                        className="d-block w-75 mx-auto"
                        src="https://www.pngitem.com/pimgs/m/61-612916_transparent-home-appliances-png-home-appliances-png-png.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='slider-title'>Welcome to Posh Electronics</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '400px' }}
                        className="d-block w-75 mx-auto"
                        src="https://www.nicepng.com/png/detail/182-1826831_home-appliances-png-picture-electronic-home-appliances-png.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='slider-title'>Welcome to Posh Electronics</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '400px' }}
                        className="d-block w-75 mx-auto"
                        src="https://www.kindpng.com/picc/m/218-2181525_transparent-home-appliances-png-png-download.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='slider-title'>Welcome to Posh Electronics</h1>
                        <p>We are here to make your lifestyle posh </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
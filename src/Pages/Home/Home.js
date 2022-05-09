import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider/Slider';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
    }, [])

    return (
        <div className='container'>

            <Slider></Slider>
            <div className='inventoryHome'>
                {
                    products.slice(0, 6).map(product => <div className='border border-1 my-3 product-card' key={product._id}>

                        <img style={{ height: "320px", width: "365px" }} src={product.image} alt="" />
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                        <p>TK.{product.price}</p>
                        <p>Quantity:{product.quantity}</p>
                        <Link to={`/details/${product._id}`}><button className='mb-2'>Delete</button></Link>
                    </div>)

                }
            </div>

            <Link to="/manage"><button className='my-4'>Manage Inventory</button></Link>
        </div >
    );
};

export default Home;
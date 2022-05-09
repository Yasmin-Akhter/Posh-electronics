import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider/Slider';
import './Home.css'
import CustomerBenefit from '../CustomerBenefit/CustomerBenefit';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import InventoryDetails from '../InventoryDetails/InventoryDetails';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch("https://afternoon-cove-01643.herokuapp.com/product")
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
                        <p>Quantity:{product.quantity}, supplier name:{product.supplierName}</p>
                        <Link to={`/details/${product._id}`}><button className='mb-2 rounded-pill px-3 border-0'>Details</button></Link>
                    </div>)

                }

            </div>



            <Link to="/manage"><button style={{ borderRadius: '30px' }} className='my-4 border-0'>Manage Inventory</button></Link>

            <CustomerBenefit></CustomerBenefit>
            <DiscountOffer></DiscountOffer>
        </div >
    );
};

export default Home;
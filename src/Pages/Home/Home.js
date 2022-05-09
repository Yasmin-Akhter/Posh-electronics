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
                    products.slice(6, 12).map(product => <div className='border border-1 my-3 product-card' key={product._id}>

                        <img className='rounded-top' style={{ height: "250px", width: "296px", boxShadow: '1px 1px 2px gray' }} src={product.image} alt="" />
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                        <p>TK.{product.price}</p>
                        <p>Quantity:{product.quantity}, supplier name:{product.supplierName}</p>
                        <Link to={`/details/${product._id}`}><button style={{ borderRadius: '30px', boxShadow: '1px 1px 1px gray', backgroundColor: 'gray', color: 'white' }} className='mb-2 rounded-pill py-2 px-5 border-0'>Details</button></Link>
                    </div>)

                }

            </div>



            <Link to="/manage"><button style={{ borderRadius: '30px', boxShadow: '1px 1px 1px gray', backgroundColor: 'burlywood', color: 'black' }} className='my-4 p-3 border-0 fw-bold'>Manage Inventory</button></Link>

            <CustomerBenefit></CustomerBenefit>
            <DiscountOffer></DiscountOffer>
        </div >
    );
};

export default Home;
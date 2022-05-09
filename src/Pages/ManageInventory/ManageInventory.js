import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ManageInventory = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch("https://afternoon-cove-01643.herokuapp.com/product")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
    }, [])
    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure want to delete? ');
        if (proceed) {
            const url = `https://afternoon-cove-01643.herokuapp.com/product/${id}`

            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(result => {

                    if (result.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                    console.log(result);
                })
        }
    }


    return (
        <div>
            <h3 className='my-4'>Manage Inventory</h3>



            {
                products.map(product => <div className=' w-50 mx-auto d-flex align-items-center justify-content-evenly border border-2 mb-3' key={product._id}>

                    <img style={{ height: "80px", width: "80px" }} src={product.image} alt="" />
                    <h5>{product.name}</h5>
                    <h6>TK.{product.price}</h6>
                    <button onClick={() => handleDelete(product._id)}>Delete</button>


                </div>)

            }
            <Link to="/add" ><button className='bg-primary text-white border-0 py-1 mb-5'>Add New Item</button></Link>


        </div>
    );
};

export default ManageInventory;
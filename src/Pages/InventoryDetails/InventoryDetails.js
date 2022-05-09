import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [update, setUpdate] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdate(data))
    }, [])
    const handleDelivery = (e) => {
        const stock = e.target.quantity;
        console.log(stock);

    }
    const handleRestock = (e) => {
        e.preventDefault();

        const restock = e.target.restock.value;

        console.log(restock);

        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),

        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Product updated successfully!!!');
                e.target.reset();
            })


    }


    return (
        <div>
            <h1>Inventory Details:{update.name}</h1>
            <img style={{ height: "320px", width: "365px" }} src={update.image} alt="" />
            <h5>{update.name}</h5>
            <p>{update.description}</p>
            <p>TK.{update.price}</p>
            <p>Quantity:{update.quantity}</p>
            <div>
                <button onClick={handleDelivery}>Delivered</button>
                <form onSubmit={handleRestock}>
                    <input type="number" name='restock' placeholder='Restock' />
                    <input type="submit" value="Restock" />
                </form>

            </div>
            <br />


            <Link to="/manage"><button>Manage Inventory</button></Link>
        </div>
    );
};

export default InventoryDetails;
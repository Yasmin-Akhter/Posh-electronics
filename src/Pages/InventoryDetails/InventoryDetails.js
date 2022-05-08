import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [details, setDetails] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <h1>Inventory Details:{details._id}</h1>

            <Link to="/manage">Manage Inventory</Link>
        </div>
    );
};

export default InventoryDetails;
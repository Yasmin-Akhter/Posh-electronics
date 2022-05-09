import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddInventory = () => {
    const [product, setProduct] = useState({});

    const handleAdd = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const supplierName = e.target.supplierName.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const image = e.target.image.value;

        const product = { name, supplierName, description, price, quantity, image };
        e.target.reset();
        console.log(product);


        const url = "https://afternoon-cove-01643.herokuapp.com/product";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),

        })
            .then(res => res.json())
            .then(result => {
                console.log('success:', result);
            })
    };





    return (
        <div className='w-50 mx-auto'>
            <h1>Add new item</h1>
            <Form onSubmit={handleAdd}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSupplierName">
                    <Form.Control type="text" name='supplierName' placeholder="Enter Supplier Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control type="text area" name='description' placeholder="Description"

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="number" name='price' placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control type="number" name='quantity' placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name='image' placeholder="Image url" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    ADD
                </Button>

            </Form>


        </div>
    );
};

export default AddInventory;
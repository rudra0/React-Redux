import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useDispatch, useStore } from 'react-redux'
import { saveProduct } from '../actions/productAction'



export default function AddProduct() {
  
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(0)

  function validateForm() {
    return name.length > 0 && description.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setId(id+1)
    dispatch(saveProduct( { _id:id, name, price, image, quantity, description } ));
  }

  return (
      <div>
          <div className="Login container">
        <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
      <FormGroup controlId="text" bsSize="large">
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
       </FormGroup>
       <FormGroup controlId="text" bsSize="large">
          <FormLabel>Description</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
       </FormGroup>
       <FormGroup controlId="text" bsSize="large">
          <FormLabel>Price</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
       </FormGroup>
       <FormGroup controlId="text" bsSize="large">
          <FormLabel>Quantity</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            required
            
          />
       </FormGroup>
       <FormGroup controlId="text" bsSize="large">
          <FormLabel>Image</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
            
          />
       </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
       
      </form>
      
    </div>
  
      </div>
    );
}
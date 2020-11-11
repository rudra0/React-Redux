import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { register } from '../actions/userAction';
import { useSelector, useDispatch } from 'react-redux';





export default function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const dispatch = useDispatch();
    const userRegister = useSelector(state=> state.userRegister);
    const redirect = props.location.search ? props.location.search.split("=")[1] : "/";

    const { loading, userInfo, error } = userRegister

    useEffect(() => {

        if(userInfo)
        {
            props.history.push(redirect);
            
        }
       
        return () => {
            
        }
    }, [  userInfo  ])


  function validateForm() {
    return email.length > 0 && password.length > 0 && name.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    dispatch(register( name, email, password ));
  }

  return (
      <div>
          <div className="Login container">
        <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <FormGroup controlId="text" bsSize="large">
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
        <div style={{ marginTop: "15px"}}><Link to="/signin"><h6>Already Registered? Click To SignIn</h6></Link></div>
      </form>
      
    </div>
  
      </div>
    );
}
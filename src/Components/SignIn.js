import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userAction';

export default function SignIn(props) {

  const dispatch = useDispatch();
    const userSignIn = useSelector(state=> state.userSignIn);

    const { loading, userInfo, error } = userSignIn

    const redirect = props.location.search ? props.location.search.split("=")[1] : "/";
    
    
    

    useEffect(() => {

        if(userInfo)
        {
            props.history.push(redirect);
            
        }
       
        return () => {
            
        }
    }, [  userInfo  ])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signin(email, password ));
  }

  return (
      <div>
          <div className="Login container">
        <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

        <div style={{ marginTop: "15px"}}><Link to="/register"><h6>Not Registered Yet? Click To Register</h6></Link></div>
      </form>
    </div>
  
      </div>
    );
}
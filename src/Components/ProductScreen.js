import React from 'react'
import { FormControl, Form, Button } from 'react-bootstrap';

const ProductScreen = () =>
{
    return(
        <div>
                 <div className="container searchBar">
                    <Form style={{maxWidth : "400px", marginTop: "10px"}} >
                            <FormControl type="text" placeholder="Search" className="mr-sm-2 " />
                                <br></br>
                            <Button variant="outline-success" style ={{ color: "black"}}>Search</Button>
                        </Form>
                </div>
        </div>
    
    )
}

export default ProductScreen;
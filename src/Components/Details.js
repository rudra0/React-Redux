import React, { useState } from 'react'
import catalog from '../catalog .json'
import { Card, Button, Breadcrumb } from 'react-bootstrap'

const Details = (props) =>
{
    var subData = ""
    var subCatData = ""
    
    subData = catalog.data.locations.filter( (locationData) => locationData.name === props.match.params.locationName)
    
    subCatData = subData[0].branches[0].categories.filter( (data) => data.name === props.match.params.particularData)
    console.log(subCatData[0])
    

    return(
        <div style={{marginTop: "5rem"}}>
            <Breadcrumb>
                <Breadcrumb.Item style={{backgroundColor: "white"}} href={"/locations/"+props.match.params.locationName}>Equipment Catalog</Breadcrumb.Item>
                <Breadcrumb.Item src="#">
                 {props.match.params.particularData}
                </Breadcrumb.Item>
                
            </Breadcrumb>
            
            {
                subCatData[0].subcategories.map((data)=>
                {
                    return(
                        <Card className="locationOnly" style={{margin: "5px" }}>
                                        <Card.Img  src={data.image}  alt= {data.image} />
                                        <Card.Body>
                                            <Button variant="primary"  >{data.name}</Button>
                                        </Card.Body>
                                    </Card>
                    )
                })
            }

        </div>
    )
}

export default Details;
import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import catalog from '../catalog .json'
import { useHistory} from 'react-router-dom'

const OnlyLocation = (props) =>
{
    var categoryData = ""
    const history = useHistory()
    categoryData = catalog.data.locations.filter( (locationData) => locationData.name === props.match.params.locationName)
    
    const [particularData, setParticularData ] = useState("")
    console.log((particularData)) 
    const onDetails = (e) =>
    {
        setParticularData(e.target.innerText)
        
       
    }
    const redirectTo = () =>
    {
        history.push("/newLocation/detail/"+ props.match.params.locationName +"/" + particularData)
    }
    
    return(

    <div>
        <h4 style = {{marginTop: "5rem"}}>Equipment Category({props.match.params.locationName  })</h4>
        <br></br>
        
        <div className="container" style = {{ marginTop: "10px"}}>
            <div >
            {
                categoryData[0].branches.map( (data) =>
                {
                    return(
                       <div >
                           
                           {
                            data.categories.map( (dataa) =>
                            {
                                return(
                                   
                                    <Card className="locationOnly" style={{margin: "5px" }}>
                                        <Card.Img  src={dataa.image}  />
                                        <Card.Body>
                                            <Button variant="primary" onClick={ ()=>redirectTo()} onMouseOver = { (e)=>onDetails(e)} >{dataa.name}</Button>
                                        </Card.Body>
                                    </Card>
                                    
                                )
                            })
                        }
                       </div> 
                        
                        
                    )
                }

                )
            }
            </div>
            
                
        </div>
        
    </div>
    )
}

export default OnlyLocation
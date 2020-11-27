import React,{ useState } from 'react'
import catalog from '../catalog .json'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Locations = (props) =>
{
    const [particularData, setParticularData ] = useState("")
    const history = useHistory();
    var subCategoryData = ""
    var individualSubCategoryData = ""
    
    subCategoryData = catalog.data.locations.filter( (locationData) => locationData.name === props.match.params.locationName)
    individualSubCategoryData = subCategoryData[0].branches.filter( (subcategory) => subcategory.name === props.match.params.branchName
    )

    const onDetails = (e) =>
    {
        setParticularData(e.target.innerText)
        
       
    }
    const redirectTo = () =>
    {
        history.push("/newLocation/detail/"+ props.match.params.locationName +"/" + particularData)
    }
    
    console.log(individualSubCategoryData[0])
    return(
        
        <div>
            
            <h3 style = {{marginTop: "5rem"}}>Category Items({props.match.params.locationName} ({ props.match.params.branchName}))</h3>
            <div>
                {
                    individualSubCategoryData[0].categories.map((data)=>
                    {
                        return(
                            <Card className="locationOnly" style={{margin: "5px" }}>
                                        <Card.Img  src={data.image}  alt= {data.image} />
                                        <Card.Body>
                                            <Button variant="primary" onClick={ ()=>redirectTo()} onMouseOver = { (e)=>onDetails(e)}>
                                                {data.name}</Button>
                                        </Card.Body>
                                    </Card>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Locations
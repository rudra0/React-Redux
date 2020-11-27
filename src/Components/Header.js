import React, {useState, useEffect} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import catalog from '../catalog .json'
const Header = (props) =>{

    const [locationName, setLocationName] = useState("ILLINOIS");
    const [branchName, setNewBranchName] = useState("")
    
    var newLocation = ""
    newLocation = catalog.data.locations.filter( (locationData) => locationData.name === locationName)
    
    
    
    console.log(  locationName, branchName )
   
    const history = useHistory();
    
    const handleChange = (e) =>
    {
        setLocationName(e.target.text)
        newLocation = catalog.data.locations.filter( (locationData) => locationData.name === locationName)
        
        console.log(newLocation[0].branches)

        
    
    }

    const handleBranchChange = (e) =>
    {
        setNewBranchName(e.target.text)
        
    }

    const onLocationChange = (e) =>
    {
        history.push("/locations/"+locationName)
    }

    const onBranchChange = (e) =>
    {
        history.push("/location/"+locationName+"/"+branchName +"?")
    }

    return(
        <Navbar className="navbar1" style={{backgroundColor: "#333333"}} fixed= "top" expand="lg">
    <Navbar.Brand style={{color: "white", fontSize: "14px"}} href="/">RENTAL MANAGEMENT SYSTEM</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{marginRight: "9rem"}}>
    <ul class="mainMenu">
                
                <li><a >LOCATION</a>
                    <ul class="subMenu" >
                        {
                            catalog.data.locations.map( (data) =>
                            {
                                        
                                return(
                                    <li><a id="anchor"  onMouseOver = { (e)=>handleChange(e)} onClick = { (e)=>onLocationChange(e)}>{data.name}</a>
                                        <ul class="SuperSubMenu">
                                            {
                                                newLocation[0].branches.map( (data) =>
                                                {
                                                    return(
                                                    <li><a  onMouseOver = { (e) => handleBranchChange(e)} onClick = { (e)=>onBranchChange(e)} >{data.name}</a></li>
                                                    )
                                                })
                                            }
                                            
                                            
                                        </ul>
                                    </li>
                                        
                                    
                                )
                            })
                        }

                        
                    </ul>
                </li>
                
            </ul>

      
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}

export default Header;
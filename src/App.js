import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Locations from './Components/Locations';
import OnlyLocation from './Components/OnlyLocation';
import Details from './Components/Details';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path= "/" component = {Home} />
        <Route path = "/location/:locationName/:branchName?" component = { Locations } />
        <Route path = "/locations/:locationName" component = {OnlyLocation} />
        <Route path = "/newLocation/detail/:locationName/:particularData" component = { Details} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

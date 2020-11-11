import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SignInScreen from './Components/SignIn';
import Register from './Components/Register';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import ProductScreen from './Components/ProductScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path= "/" component = {ProductScreen} />
        <Route path = "/signin" component =  {SignInScreen} />
        <Route path = "/register" component= {Register} />
        <Route path = "/addproduct" component = { AddProduct } />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

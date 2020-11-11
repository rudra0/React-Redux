import { createStore, combineReducers , applyMiddleware, compose } from 'redux'
import { userReducer, userRegisterReducer } from './reducer/userReducer'
import { productListReducer,  productSaveReducer } from './reducer/productReducer';
import Cookie from "js-cookie";
import  thunk  from 'redux-thunk';



const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = { userSignIn: {userInfo} }
const reducer = combineReducers({
    userSignIn: userReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productList : productListReducer
})

const store = createStore( reducer, initialState, compose(applyMiddleware(thunk)) );

export default store;
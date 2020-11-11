import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAILED } from "../constants/productConstants";
import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAILED } from "../constants/productConstants";
import { PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAILED } from "../constants/productConstants";
import axios from "axios";
import Axios from "axios";


const listProduct = ()=> async ( dispatch )=>{
    
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const  {data}  = await axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
        
        
    }
    catch(err)
    {
        dispatch({type: PRODUCT_LIST_FAILED, payload: err.message});
    }
}

const saveProduct = (product) => async(dispatch, getState) =>{
    try{
        
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product })
        
        const {userSignIn:{userInfo}} = getState();
        
        if(!product._id)
        {
            const { data } = await Axios.post("/api/products", product , {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.token
                }
            });  
            dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data });
        }
        else
        {
            const { data } = await Axios.put("/api/products/" + product._id, product , {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data });
        
        }


    }
    catch(err){
        dispatch({ type: PRODUCT_SAVE_FAILED, payload:  err.message })

    }
}





export { listProduct, saveProduct }
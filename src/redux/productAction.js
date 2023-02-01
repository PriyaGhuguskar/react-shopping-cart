import { ActionTypes } from "./Action"
export const setproducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}


export const addtocart =(products)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:products,
    }
}

export const removefromcart =(product)=>{
    return{
        type:ActionTypes.REMOVE_FROM_CART,
        payload:product,
    }
}
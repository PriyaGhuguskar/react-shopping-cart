import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addtocart } from '../redux/productAction'

const Addbtn = (data) => {
const cartstore=useSelector((state)=>state.allproducts.cartadd)
console.log(cartstore)
const dispatch=useDispatch();

const addproductcart=()=>{
    dispatch(addtocart({data
    }))
}

  return (
    <>
        <button type="button" 
    onClick={()=>{addproductcart()}}
      className="btn btn-dark btn-sm"
      style={{ margin: "0 5px", width: "13rem" }}
    >
      Add to Cart
    </button></>
  )
}

export default Addbtn
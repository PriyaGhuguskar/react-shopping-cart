import React,{useEffect} from 'react'
import axios from 'axios';
// import {Row,Container,Col,Card,Spinner} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {setproducts} from '../redux/productAction'
import Productlist from './Productlist';

const Productcompo = () => {
  const datalist = useSelector((state)=> state.allproducts.products)
 const dispatch= useDispatch()
    // const [productData, setproductData]=useState([])

    useEffect(() => {
        axios
          .get("https://dummyjson.com/products")
          .then((res) =>{dispatch(setproducts(res.data.products))
          console.log(res.data.products)})
          .catch((err) => console.log(err));
      }, [dispatch]);
      console.log(datalist)
  return (
    <>
  <Productlist />
    </>
  )
}

export default Productcompo
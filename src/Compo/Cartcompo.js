import React,{useEffect} from 'react'
import axios from 'axios';
import './Add.css';
import {Row,Container,Col,Card,Spinner} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {setproducts} from '../redux/productAction'
import Total from './Total';

const Cartcompo = () => {
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
   <div className='main-container'>
     <div className='cart-container'>
  <Container>
    <Row>
      {datalist.length ? (
        datalist.map((data) => (
          <Col md={4} className="mt-2 mb-2" key={data.id}>
            <Card style={{ width: "16rem", textAlign: "center" }}>
              <Card.Img 
                variant="top"
                src={data.thumbnail}
                style={{ height: "200px", border:"1px solid black"}}
              />
              <Card.Body>
                <Card.Title style={{fontSize: "1.1em", fontWeight:"500" }}>
                {data.title}

                    </Card.Title>
                <Card.Text >
                    Price: ${data.price}</Card.Text>
                    
                             
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Spinner
          animation="border"
          role="status"
          style={{ margin: "200px auto" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Row>
  </Container>
  </div>
  
    
    <div  className='left-container'>
      <Total />
    </div>
    </div>
  )
}

export default Cartcompo
import React from 'react'
import { useSelector} from 'react-redux';

import {Container,Spinner,Row , Col } from 'react-bootstrap'


const Total = () => {
    const datalist = useSelector((state)=> state.allproducts.products)

  return (
    <div>
        <Container style={{backgroundColor: "black" }} >
        <Row className='total-row'>
        <h3  className="mt-2 mb-2"style={{textAlign: "center" }}> Checkout List</h3>
        <Col className="total-col"  style={{fontSize: "1.2em", fontWeight:"600",textAlign: "center" }}>Product</Col>
        <Col className="total-col" style={{fontSize: "1.2em", fontWeight:"600",textAlign: "center" }}>Price</Col>
        </Row>
      {datalist.length ? (
        datalist.map((data) => (
            <Row className='total-row'>
          <Col className="total-col"style={{fontSize: "1.1em", fontWeight:"500",textAlign: "center" }}>
                
                {data.title}
                </Col>

                <Col className="total-col"style={{fontSize: "1.1em", fontWeight:"500",textAlign: "center" }}>
                
                ${data.price}
                </Col>
                {/* <span style={{textAlign: "right" ,marginRight: "10px",}}>
                ${data.price}
                </span> */}
               

                    
                
                    
                    
                              
              
            
           </Row>
       
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
          
          <div className='final-checkout'>
          <Row className='total-row'>
        <Col className="total-col"  style={{fontSize: "1.2em", fontWeight:"600",textAlign: "center" }}>Total Price</Col>
        <Col className="total-col" style={{fontSize: "1.2em", fontWeight:"600",textAlign: "center" }}>$ 2999</Col>
        </Row>
        </div>
  </Container>
    </div>
  )
}

export default Total
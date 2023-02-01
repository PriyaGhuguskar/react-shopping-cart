import React from 'react'
import { useSelector } from 'react-redux'
import { Col ,Container,Spinner,Card,Row} from 'react-bootstrap';
import Addbtn from './Addbtn';

const Productlist = () => {
    const datalist= useSelector((state)=>state.allproducts.products);

  return (
    <>
       <Container>
    <Row>
      {datalist.length ? (
        datalist.map((data) => (
          <Col md={3} className="mt-2 mb-2" key={data.id}>
            <Card style={{ width: "17rem", textAlign: "center" }}>
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
                    
                <Addbtn id={data.id}/>               
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
    </>
  )
}

export default Productlist 
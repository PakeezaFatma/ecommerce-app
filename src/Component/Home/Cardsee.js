import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const Cardsee = () => {
  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
    
    
  return (
    <section>
      <Container className="text-center">
        {" "}
        <h1 style={{fontFamily:"Metal Mania"}}>Music</h1>
      </Container>

      <Container
      className="w-75 d-flex justify-content-around"
       
      >
        <Row >
          <Col className="m-5" >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={productsArr[0].imageUrl}/>
              <Card.Body>
                <Card.Title>{productsArr[0].title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span>$
                    <span>{productsArr[0].price}</span>
                  </span>
                  <Button>Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-5" >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={productsArr[0].imageUrl}/>
              <Card.Body>
                <Card.Title>{productsArr[0].title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span>$
                    <span>{productsArr[0].price}</span>
                  </span>
                  <Button>Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
      <Container
      className="w-75 d-flex justify-content-around"
        
      >
        
        <Row>
        <Col className="m-5" >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={productsArr[0].imageUrl}/>
              <Card.Body>
                <Card.Title>{productsArr[0].title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span>$
                    <span>{productsArr[0].price}</span>
                  </span>
                  <Button>Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-5" >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={productsArr[0].imageUrl}/>
              <Card.Body>
                <Card.Title>{productsArr[0].title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span>$
                    <span>{productsArr[0].price}</span>
                  </span>
                  <Button>Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        {" "}
        <h1 style={{fontFamily:"Metal Mania"}}>Merch</h1>
      </Container>
      <Container
      className=" w-75 d-flex justify-content-around"
        
      >
        <Row>
        <Col className="m-5" >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={productsArr[0].imageUrl}/>
              <Card.Body>
                <Card.Title>{productsArr[0].title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span>$
                    <span>{productsArr[0].price}</span>
                  </span>
                  <Button>Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-5" >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={productsArr[0].imageUrl}/>
              <Card.Body>
                <Card.Title>{productsArr[0].title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span>$
                    <span>{productsArr[0].price}</span>
                  </span>
                  <Button>Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default Cardsee;

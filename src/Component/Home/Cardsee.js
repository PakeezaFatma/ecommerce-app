import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { ContextAPI } from "../../Store/ContextAPI";
import { NavLink } from "react-router-dom";


const Cardsee = (props) => {
const ctx =useContext(ContextAPI);

const productsArr = [

  {
    id:'a1',
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
    id:'a2',
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
    id:'a3',
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
    id:'a4',
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ];

    
    
    const addToCartHandler=(title,price,img,i)=>{
      const obj={
        title:title,
        price:price,
        imageUrl:img,
        id:i,
        quantity:1
      }
      ctx.addtoCartItem(obj)
    }
    
  return (
    <section>
      <Container className="text-center">
        {" "}
        <h1 style={{fontFamily:"Metal Mania"}}>Music</h1>
      </Container>

      <Container
      className="w-75 "
      
      >
        <Row  >
         {productsArr.map((item)=>(
           <Col className="m-5 d-flex justify-content-around" key={item.id} id={item.id} >
           <Card style={{ width: "18rem" }}>
             <div>
              <NavLink to={`/singleproduct/${item.id}`}>
              <Card.Img variant="top" src={item.imageUrl}/>
              </NavLink>
             
             </div>
             <Card.Body>
               <Card.Title>{item.title}</Card.Title>
               <Card.Text>
                 Some quick example text to build on the card title and make up
                 the bulk of the card's content.
               </Card.Text>
               <div style={{display:"flex",justifyContent:"space-between"}}>
                 <span>$
                   <span>{item.price}</span>
                 </span>
                 <Button onClick={addToCartHandler.bind(null,item.title,item.price,item.imageUrl,item.id)}>Add to cart</Button>
               </div>
             </Card.Body>
           </Card>
         </Col>
         ))}
          
        </Row>
        
      </Container>
    </section>
  );
};

export default Cardsee;

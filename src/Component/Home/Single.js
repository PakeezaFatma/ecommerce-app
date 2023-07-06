import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import ReactImageMagnify from 'react-image-magnify';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
const Single = () => {
  const { id } = useParams();
  const productsArr = [
    {
      id: "a1",

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "a2",

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "a3",

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "a4",

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const singlepage = productsArr.filter((item) => item.id === id);
  return (
    <Fragment>
      <Container>
       
        {
            singlepage.map((i)=>
            <Row className="w-75">
          <div className="text-center mt-5">
            <h1>Product Page</h1>
          </div>
          <Col
            md={4}
            xs={6}
            className="m-5 d-flex justify-content-around"

          >
            <div>
                <ReactImageMagnify {...{
                    smallImage:{
                        alt:'Product Image',
                        isFluidWidth:true,
                        src:i.imageUrl
                    },
                    largeImage:{
                        src:i.imageUrl,
                        width:1200,
                        height:1800
                    }
                }} />
            </div>
          </Col>
          <Col className="m-5">
            <div >Title : {i.title}</div>
            <div >
              MRP : $<del>{i.price + 199}</del>
            </div>
            <div >Price : ${i.price}</div>
            <div >
              Description : Lorem ipsum carrots enhanced rebates. Excellent
              sayings of a man of sorrows, hates no prosecutors will unfold in
              the enduring of which were born
            </div>
          </Col>
        </Row>
                
            )
        }
        
      </Container>
    </Fragment>
  );
};

export default Single;

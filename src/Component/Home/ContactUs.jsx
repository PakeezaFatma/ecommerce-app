import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState();
  const [last,setLast]= useState();
  const [phone,setPhone]= useState();
  const [email,setEmail]= useState();
  const [msg,setMsg]= useState();


  const nameHandler = (e) => {
    setName(e.target.value);

  };
  const lastHandler=(e)=>{
    setLast(e.target.value);
  }
  const phoneHandler=(e)=>{
    setPhone(e.target.value);
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value);
  }
  const msgHandler=(e)=>{
    setMsg(e.target.value);
  }

  let url = "https://e-commerce-600dd-default-rtdb.firebaseio.com/pakeeza.json";
  const DataSend = async () => {
    try {
     await fetch(url, {
        method: "POST",
        body: JSON.stringify({ 
          nameKey: name,
          lastKey:last,
         phoneKey:phone,
         emailKey:email,
        message:msg
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    DataSend();
    setValidated(true);
  };

  return (
    <>
      <Container className="w-50">
      <div className="text-center mt-5">
        <h1>Contact US</h1>
        </div>

        <Row className="m-5 d-flex justify-content-around "  >
          
          <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Row className="" >
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First Name"
              value={name}
              onChange={nameHandler}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last Name"
              Value={last}
              onChange={lastHandler}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Phone Number"
              Value={phone}
              onChange={phoneHandler}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              Value={email}
              onChange={emailHandler}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          
        </Row>
        <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Write Message"
              Value={msg}
              onChange={msgHandler}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
        </Row>

        {/* <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group> */}
        <Row><Button type="submit" className="mt-3 btn-info btn-block">Submit form</Button></Row>
        
      </Form>
          
        </Row>
      </Container>
      
    </>
  );
};

export default ContactUs;




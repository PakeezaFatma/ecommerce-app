import React, { useContext } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { ContextAPI } from "../../Store/ContextAPI";
const Movies = () => {
  // const [showBtn, setBtn]=useState(false);
  
  const ctx=useContext(ContextAPI)
  // const data = [
    
      
  //       {
  //         id: 0,
  //         job: "React UI Developer",
  //         period: "2017-2018",
  //         description:
  //           "I love Creating beautiful Smart UI with React js and styled components",
  //       },
  //       {
  //         id: 1,
  //         job: "React/ Redux UI Developer",
  //         period: "2017-2018",
  //         description:
  //           "I love Creating beautiful Smart UI with React js and styled components",
  //       },
      
    
  // ];
  return (
    <Container className="w-75">
      <div className="text-center mt-5">
        <h1>Movies</h1>
        <Button onClick={ctx.fetchMoviesHandler} bsStyle="primary" bsSize="large">Fetch Movie</Button>
        
        {/* { showBtn && <Button bsStyle="primary" bsSize="large" className="ml-2">Show&Hide</Button>} */}
        

      </div>
      <Row>
        <Col>
          <MDBTable striped>
            <MDBTableHead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {ctx.moviesFetch.map((item) => (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.openingText}</td>
                  <td>{item.releaseDate}</td>
                </tr>
              ))}

              {/* <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
            </MDBTableBody>
          </MDBTable>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;

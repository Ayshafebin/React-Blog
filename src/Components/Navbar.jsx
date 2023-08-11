import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import ViewBlog from './ViewBlog';
import AddBlog from './Add';

function Navbar1() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>Blogger</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          {/* <Nav.Link onClick={() => navigate('/add')}<>Create Blog</Nav.Link> */}
          <div><AddBlog/></div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar1;

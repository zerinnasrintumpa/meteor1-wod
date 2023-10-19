import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Instagram } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar expand="lg" bg="light" className="fixed-top pb-2">
    <Container>
      <Navbar.Brand href="#home"><Instagram /></Navbar.Brand>
      <Nav className="mx-auto"><Button href=" " variant="link"><Image src="/images/The_Boardroom_Logo.png" width="70px" /></Button></Nav>
      <Nav><Button variant="dark" href=" ">Menu</Button></Nav>
    </Container>
  </Navbar>
);
export default TopMenu;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const CenterImage = () => (
  <Container className="d-flex justify-content-center mt-5 p-5">
    <Image src="/images/The_Boardroom_Logo.png" height="500px" />
  </Container>
);

export default CenterImage;

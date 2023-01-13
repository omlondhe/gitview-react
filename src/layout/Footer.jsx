import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white text-uppercase fixed-bottom p-3"
    >
      Owned by Om Londhe
    </Container>
  );
}

export default Footer;

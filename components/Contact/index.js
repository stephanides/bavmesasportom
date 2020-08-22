import React from "react";
import { H2, Facebook, NewsTitle, Instagram } from "../shared/global.style";
import { Container, Row, Col } from "reactstrap";

const Contact = () => (
  <div id="contact">
    <Container>
      <Row>
        <Col lg={6}>
          <H2 className="mt-4">Kontakt</H2>
          <NewsTitle>Bavme sa športom</NewsTitle>
          <NewsTitle>Sídlo: Okružná č. 129, 064 01 Stará Ľubovňa</NewsTitle>
          <NewsTitle>IČO: 53013468</NewsTitle>
          <NewsTitle>Bankové spojenie: SK64 8330 0000 0026 0181 1123</NewsTitle>
          <NewsTitle>
            Email:{" "}
            <a href="mailto: volejmixlubovna@gmail.com">
              volejmixlubovna@gmail.com
            </a>
          </NewsTitle>
        </Col>
        <Col lg={6}>
          <H2 className="mt-4">Sledujte nás</H2>
          <a
            href="https://www.facebook.com/volejbalmixstaralubovna"
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/volejbalmixstaralubovna/?hl=sk"
            target="_blank"
          >
            <Instagram />
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;

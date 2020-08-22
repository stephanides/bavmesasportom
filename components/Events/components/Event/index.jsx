import React from "react";
import Link from "next/link";
import { Row, Col } from "reactstrap";
import {
  EventImg,
  EventWrapper,
  EventOrganizatorHolder,
  EventOrganizator,
  Person,
  Clock,
  Geo,
  ButtonSmall,
  NewsTitle,
} from "../../../shared/global.style";
import formatDate from "../../../../helpers";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Event = ({ data }) => {
  console.log(data);
  return (
    <EventWrapper>
      <Row>
        <Col lg="3"></Col>
        <Col lg="9">
          <NewsTitle>{data.title}</NewsTitle>
        </Col>
      </Row>
      <Row>
        <Col lg="3" className="vertical_center">
          <Link href={{ pathname: "/udalost", query: { id: data._id } }}>
            <EventImg url={`http://localhost:1337${data.image.url}`} />
          </Link>
        </Col>
        <Col lg="5" className="vertical_center mobile-col">
          <EventOrganizatorHolder className="mb-2">
            <Person />{" "}
            <EventOrganizator>{`${data.organizator}`}</EventOrganizator>
          </EventOrganizatorHolder>
          <EventOrganizatorHolder>
            <Clock />{" "}
            <EventOrganizator>{`Pridané: ${formatDate(
              data.createdAt
            )}`}</EventOrganizator>
          </EventOrganizatorHolder>
          <Link href={{ pathname: "/udalost", query: { id: data._id } }}>
            <ButtonSmall>O podujatí</ButtonSmall>
          </Link>
        </Col>
        <Col lg="4" className="vertical_center  mobile-col">
          <EventOrganizatorHolder className="mb-2">
            <Clock />{" "}
            <EventOrganizator>{`od ${formatDate(
              data.dateStart
            )}`}</EventOrganizator>
          </EventOrganizatorHolder>
          <EventOrganizatorHolder>
            <Geo />
            <EventOrganizator>{data.adress}</EventOrganizator>
          </EventOrganizatorHolder>
          <Link href={{ pathname: "/registracia", query: { id: data._id } }}>
            <ButtonSmall>Registrácia</ButtonSmall>
          </Link>
        </Col>
      </Row>
    </EventWrapper>
  );
};

export default Event;

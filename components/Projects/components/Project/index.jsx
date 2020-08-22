import React from "react";
import Link from "next/link";
import { Col } from "reactstrap";
import {
  EventTitle,
  Description,
  Button,
  Card,
} from "../../../shared/global.style";

function createMarkup(value) {
  return { __html: value };
}

const Project = ({ data }) => {
  return (
    <Col lg="4" className="mb-40">
      <Card className="vertical_between">
        <div>
          <EventTitle>{data.title}</EventTitle>
          <Description>{data.shortDescription}</Description>
        </div>
        <Link href={{ pathname: "/podujatie", query: { id: data._id } }}>
          <Button>Detail podujatia</Button>
        </Link>
      </Card>
    </Col>
  );
};

export default Project;

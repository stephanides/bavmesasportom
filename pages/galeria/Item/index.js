import React, { useState } from "react";
import { Col } from "reactstrap";
import {
  EventTitle,
  Card,
  GalleryImage,
  Button,
} from "../../../components/shared/global.style";
import { adminURL } from "../../../components/shared/configUrl";
import Link from "next/link";

const Item = ({ data }) => {
  return (
    <>
      <Col lg={4} className="mb-40">
        <Card className="vertical_between">
          <EventTitle>{data.title}</EventTitle>
          <GalleryImage src={`${adminURL}${data.background.url}`} />
          <Link
            href={{ pathname: "/galeria/podujatie", query: { id: data._id } }}
          >
            <Button>Otvoriť galériu</Button>
          </Link>
        </Card>
      </Col>
    </>
  );
};

export default Item;

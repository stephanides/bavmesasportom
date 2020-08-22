import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import Lightbox from "react-image-lightbox";
import { Col } from "reactstrap";
import {
  EventTitle,
  ActionButton,
  Card,
  GalleryImage,
} from "../../shared/global.style";

const Item = ({ data }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Col lg={4} className="mb-40">
        <Card className="vertical_between">
          <EventTitle>{data.title}</EventTitle>
          <GalleryImage src={`http://localhost:1337${data.background.url}`} />
          <ActionButton onClick={() => setIsOpen(true)}>
            Otvoriť galériu
          </ActionButton>
        </Card>
      </Col>
      {isOpen && (
        <Lightbox
          mainSrc={`http://localhost:1337${data.photos[photoIndex].url}`}
          nextSrc={`http://localhost:1337${
            data.photos[(photoIndex + 1) % data.photos.length].url
          }`}
          prevSrc={`http://localhost:1337${
            data.photos[
              (photoIndex + data.photos.length - 1) % data.photos.length
            ].url
          }`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + data.photos.length - 1) % data.photos.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.photos.length)
          }
        />
      )}
    </>
  );
};

export default Item;

import React, { useState } from "react";
import { H2 } from "../shared/global.style";
import { Container, Spinner, Row } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Item from "./Item";

const query = gql`
  {
    galleries {
      _id
      title
      photos {
        url
      }
      background {
        url
      }
    }
  }
`;

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, data } = useQuery(query);
  if (error) {
    //   console.log(error);
  }
  if (loading) {
    return <Spinner color="primary" />;
  }

  const { galleries } = data;

  return (
    <div id="gallery">
      <Container>
        <H2 className="mt-4">Galéria podujatí</H2>
        <Row>
          {galleries.map((res, i) => (
            <Item data={res} key={i} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;

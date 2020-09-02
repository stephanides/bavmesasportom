import React, { useState } from "react";
import { H2, Button } from "../shared/global.style";
import { Container, Spinner, Row } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Item from "./Item";
import Link from "next/link";

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
          {galleries
            .reverse()
            .slice(0, 3)
            .map((res, i) => (
              <Item data={res} key={i} />
            ))}
        </Row>
        {galleries.length > 3 && (
          <div className="w-100 text-right">
            <Link href={{ pathname: "/galeria" }}>
              <Button>Ďalšie galérie</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Gallery;

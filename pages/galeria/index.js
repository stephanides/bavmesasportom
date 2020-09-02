import React, { useState } from "react";
import Error from "next/error";
import { useQuery } from "@apollo/react-hooks";
import { Spinner, Container, Row } from "reactstrap";
import Layout from "../../components/shared/Layout";
import gql from "graphql-tag";
import {
  SubPageTitle,
  GalleryImage,
} from "../../components/shared/global.style";
import { adminURL } from "../../components/shared/configUrl";
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

function createMarkup(value) {
  return { __html: value };
}

const UdalostDetail = () => {
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

  const toggle = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <Layout>
      <Container>
        <SubPageTitle>Galéria</SubPageTitle>

        <Row className="justify-content-center">
          {galleries.reverse().map((res, i) => (
            <Item data={res} key={i} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default UdalostDetail;

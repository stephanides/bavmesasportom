import React, { useState } from "react";
import Error from "next/error";
import Lightbox from "react-image-lightbox";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { Spinner, Container, Row, Col } from "reactstrap";
import Layout from "../../../components/shared/Layout";
import gql from "graphql-tag";
import {
  SubPageTitle,
  DetailGalleryImage,
  DetailGalleryImageWrapper,
  Button,
} from "../../../components/shared/global.style";
import { adminURL } from "../../../components/shared/configUrl";
import Link from "next/link";

const podujatie_query = gql`
  query gallery($id: ID!) {
    gallery(id: $id) {
      _id
      title
      photos {
        url
      }
    }
  }
`;

const GaleriaDetail = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { query } = router;
  const { error, loading, data } = useQuery(podujatie_query, {
    variables: { id: query.id },
    fetchPolicy: "network-only",
  });
  if (loading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <Error statusCode={404} />;
  }

  const toggle = (index) => {
    console.log(index);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  const { gallery } = data;
  return (
    <Layout>
      <Container>
        <SubPageTitle>{gallery.title}</SubPageTitle>

        <Row>
          {gallery.photos.map((res, i) => (
            <Col lg={3} md={4} sm={6} key={i}>
              <DetailGalleryImageWrapper>
                <DetailGalleryImage
                  src={`${adminURL}${res.url}`}
                  onClick={() => toggle(i)}
                />
              </DetailGalleryImageWrapper>
            </Col>
          ))}
        </Row>
        <div className="w-100 text-center mb-4 mt-4">
          <Link href="/galeria">
            <Button className="mb-2">Ďalšie galérie</Button>
          </Link>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={`${adminURL}${gallery.photos[photoIndex].url}`}
            nextSrc={`${adminURL}${
              gallery.photos[(photoIndex + 1) % gallery.photos.length].url
            }`}
            prevSrc={`${adminURL}${
              gallery.photos[
                (photoIndex + gallery.photos.length - 1) % gallery.photos.length
              ].url
            }`}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + gallery.photos.length - 1) % gallery.photos.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % gallery.photos.length)
            }
          />
        )}
      </Container>
    </Layout>
  );
};

export default GaleriaDetail;

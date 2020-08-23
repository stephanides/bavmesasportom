import React from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { Spinner, Container, Row } from "reactstrap";
import Layout from "../../components/shared/Layout";
import gql from "graphql-tag";
import {
  SubPageTitle,
  SubPageText,
} from "../../components/shared/global.style";
import formatDate from "../../helpers";

const podujatie_query = gql`
  query event($id: ID!) {
    event(id: $id) {
      _id
      title
      description
      organizator
      adress
      dateStart
      image {
        url
      }
      register
    }
  }
`;

function createMarkup(value) {
  return { __html: value };
}

const UdalostDetail = () => {
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

  const { event } = data;
  return (
    <Layout>
      <Container>
        <SubPageTitle>{event.title}</SubPageTitle>

        <SubPageText
          dangerouslySetInnerHTML={createMarkup(event.description)}
        />
        <h4>{`Dátum udalosti: ${formatDate(event.dateStart)}`}</h4>
        <h4>{`Miesto konania: ${event.adress}`}</h4>
        <h4 className="mb-4">{`Organizátor: ${event.organizator}`}</h4>
        <img
          className="w-100"
          src={`https://admin.bavmesasportom.sk${event.image.url}`}
        />
      </Container>
    </Layout>
  );
};

export default UdalostDetail;

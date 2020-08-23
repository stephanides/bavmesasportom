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
  RegisterHolder,
} from "../../components/shared/global.style";
import formatDate from "../../helpers";

const podujatie_query = gql`
  query event($id: ID!) {
    event(id: $id) {
      _id
      title
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
      <Container
        style={{ minHeight: "calc(100vh - 294px)" }}
        className="text-center"
      >
        <SubPageTitle>{event.title}</SubPageTitle>
        <SubPageTitle className="mt-2 pt-0">Registrácia</SubPageTitle>
        {event.register ? (
          <RegisterHolder
            dangerouslySetInnerHTML={createMarkup(event.register)}
          />
        ) : (
          <SubPageTitle className="mt-2 pt-0">
            Ľutujeme, registrácia je ukončená.
          </SubPageTitle>
        )}
      </Container>
    </Layout>
  );
};

export default UdalostDetail;

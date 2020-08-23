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

const podujatie_query = gql`
  query project($id: ID!) {
    project(id: $id) {
      _id
      title
      description
      shortDescription
      image {
        url
      }
    }
  }
`;

function createMarkup(value) {
  return { __html: value };
}

const PodujatieDetail = () => {
  const router = useRouter();
  const { query } = router;
  const { error, loading, data } = useQuery(podujatie_query, {
    variables: { id: query.id },
    fetchPolicy: "network-only",
  });
  console.log("projects");
  if (loading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <Error statusCode={404} />;
  }

  const { project } = data;

  return (
    <Layout>
      <Container>
        <SubPageTitle>{project.title}</SubPageTitle>
        <SubPageText
          dangerouslySetInnerHTML={createMarkup(project.description)}
        />
        <img
          className="w-100"
          src={`https://admin.bavmesasportom.sk${project.image.url}`}
        />
      </Container>
    </Layout>
  );
};

export default PodujatieDetail;

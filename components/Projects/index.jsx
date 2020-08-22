import React from "react";
import { H2 } from "../shared/global.style";
import { Container, Spinner, Row } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import Project from "./components/Project";
import gql from "graphql-tag";

const query = gql`
  {
    projects {
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

const Projects = () => {
  console.log("projects");
  const { loading, error, data } = useQuery(query);
  if (error) {
    //   console.log(error);
  }
  if (loading) {
    return <Spinner color="primary" />;
  }

  const { projects } = data;

  return (
    <div id="projects">
      <Container>
        <H2>Naše podujatia</H2>
        <Row>
          {projects.map((res) => (
            <Project key={res._id} data={res} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

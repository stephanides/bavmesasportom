import React from "react";
import { H2 } from "../shared/global.style";
import { Container, Spinner } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import Event from "./components/Event";
import gql from "graphql-tag";

const query = gql`
  {
    events {
      _id
      createdAt
      title
      organizator
      dateStart
      adress
      description
      image {
        url
      }
      createdAt
      register
    }
  }
`;

const Events = () => {
  const { loading, error, data } = useQuery(query);
  if (error) {
    //   console.log(error);
  }
  if (loading) {
    return <Spinner color="primary" />;
  }

  const { events } = data;

  return (
    <div id="events">
      <Container>
        <H2 className="mt-4">Nadchadzajúce udalosti</H2>
        {events.map((res) => (
          <Event key={res._id} data={res} />
        ))}
      </Container>
    </div>
  );
};

export default Events;

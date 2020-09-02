import React, { useState } from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import {
  Spinner,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Layout from "../../components/shared/Layout";
import gql from "graphql-tag";
import {
  SubPageTitle,
  SubPageText,
  ButtonSmall,
} from "../../components/shared/global.style";
import formatDate from "../../helpers";
import { adminURL } from "../../components/shared/configUrl";

const podujatie_query = gql`
  query event($id: ID!) {
    event(id: $id) {
      _id
      title
      description
      organizator
      adress
      dateStart
      teams
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
  const [modal, setModal] = useState(false);
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
  const toggle = () => setModal(!modal);

  const { event } = data;
  return (
    <Layout>
      <Container>
        <SubPageTitle>{event.title}</SubPageTitle>

        <SubPageText
          dangerouslySetInnerHTML={createMarkup(event.description)}
        />
        {event.teams && (
          <>
            <ButtonSmall className="mb-4" onClick={toggle}>
              Prihlásené družstvá
            </ButtonSmall>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Prihlásené družstvá</ModalHeader>
              <ModalBody
                dangerouslySetInnerHTML={createMarkup(event.teams)}
              ></ModalBody>
            </Modal>
          </>
        )}
        <h4>{`Dátum udalosti: ${formatDate(event.dateStart)}`}</h4>
        <h4>{`Miesto konania: ${event.adress}`}</h4>
        <h4 className="mb-4">{`Organizátor: ${event.organizator}`}</h4>
        <img className="w-100" src={`${adminURL}${event.image.url}`} />
      </Container>
    </Layout>
  );
};

export default UdalostDetail;

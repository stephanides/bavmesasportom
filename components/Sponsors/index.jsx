import React from "react";
import { H2, LogoImg, LogoSmallImg } from "../shared/global.style";
import { Container, Spinner, Row } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { adminURL } from "../shared/configUrl";

const query = gql`
  {
    sponsors {
      sponsors_main {
        url
      }
      sponsors_rest {
        url
      }
    }
  }
`;

const Sponsors = () => {
  const { loading, error, data } = useQuery(query);
  if (error) {
    //   console.log(error);
  }
  if (loading) {
    return <Spinner color="primary" />;
  }

  const { sponsors } = data;

  console.log(sponsors);

  return (
    <div id="sponsors">
      <Container>
        <H2 className="mt-4">Sponzori</H2>
        <Row>
          <a
            className="w-100 text-center"
            href="https://www.facebook.com/bururupub"
            target="_blank"
          >
            <LogoImg src="/bururu.png"></LogoImg>
          </a>
          <div className="sponsors_holder">
            {sponsors[0].sponsors_main.map((res, i) => (
              <div key={i}>
                <LogoSmallImg src={`${adminURL}${res.url}`} />
              </div>
            ))}
            {sponsors[0].sponsors_rest.map((res, i) => (
              <div key={i}>
                <LogoSmallImg src={`${adminURL}${res.url}`} />
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Sponsors;

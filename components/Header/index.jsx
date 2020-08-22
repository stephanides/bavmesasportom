import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import {
  Wrapper,
  Background,
  Overlay,
  Player,
  HeaderTextHolder,
  HeaderText,
  Button,
} from "../shared/global.style";

const Header = () => (
  <Wrapper>
    <Background>
      <Overlay />
      <HeaderTextHolder>
        <HeaderText>
          Radi Vás privítame na jednom z našich skvelých podujatí
        </HeaderText>
        <AnchorLink offset="100" className="link" href="#events">
          Podujatia
        </AnchorLink>
      </HeaderTextHolder>
      <Player src="/images/player_1.png" alt="player" />
    </Background>
  </Wrapper>
);

export default Header;

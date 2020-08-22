import React from "react";
import {
  FooterWrapper,
  FooterLogo,
  Facebook,
  Instagram,
  FooterText,
} from "../shared/global.style";

const Footer = () => (
  <FooterWrapper>
    <FooterLogo src="/images/logo.png" alt="Logo" />
    <div>
      <a
        href="https://www.facebook.com/volejbalmixstaralubovna"
        target="_blank"
      >
        <Facebook />
      </a>
      <a
        href="https://www.instagram.com/volejbalmixstaralubovna/?hl=sk"
        target="_blank"
      >
        <Instagram />
      </a>
    </div>
  </FooterWrapper>
);

export default Footer;

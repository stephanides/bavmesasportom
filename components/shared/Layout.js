import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../Footer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRouter } from "next/router";

import {
  Collapse,
  Container,
  Nav,
  NavItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";
import { Logo, Hamburger, Facebook, Instagram } from "../shared/global.style";

const Layout = ({ children }) => {
  const title = "Bavme sa športom";

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta title="Bavme sa športom" />
        <meta description="Sme občianske združenie, ktoré tvoria mladí ľudia zo Starej Ľubovne a ktorí sú zanietení športom. V meste Stará Ľubovňa organizujeme viacero športových podujatí (volejbalový turnaj MIX Stará Ľubovňa, beachvolejbalový turnaj MIX Stará Ľubovňa ako aj ples volejbalistov. " />
        <meta keywords="Volejbal, lubmix, turnaj, unifikovaný, mikasa, lopta, šport, bavme, sa, športom, beach" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
          `}
        </style>
        <Navbar expand="md" id="navigation" className="fixed-top navbar">
          <NavbarBrand>
            <Link href="/">
              <Logo
                className="navbar-brand"
                src="/images/logo.png"
                alt="Bavme sa športom"
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <Hamburger />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              {router.pathname === "/" ? (
                <>
                  <NavItem className="desktop">
                    <AnchorLink
                      offset="100"
                      className="nav-link"
                      href="#events"
                    >
                      News
                    </AnchorLink>
                  </NavItem>
                  <NavItem className="desktop">
                    <AnchorLink
                      offset="100"
                      className="nav-link"
                      href="#projects"
                    >
                      Events
                    </AnchorLink>
                  </NavItem>
                  <NavItem className="desktop">
                    <AnchorLink
                      offset="100"
                      className="nav-link"
                      href="#gallery"
                    >
                      Gallery
                    </AnchorLink>
                  </NavItem>
                  <NavItem className="desktop">
                    <AnchorLink
                      offset="100"
                      className="nav-link"
                      href="#contact"
                    >
                      Contact
                    </AnchorLink>
                  </NavItem>
                  <NavItem onClick={toggle} className="mobile">
                    <AnchorLink
                      offset="100"
                      className="nav-link"
                      href="#events"
                    >
                      News
                    </AnchorLink>
                  </NavItem>
                  <NavItem onClick={toggle} className="mobile">
                    <AnchorLink
                      offset="100"
                      className="nav-link"
                      href="#projects"
                    >
                      Events
                    </AnchorLink>
                  </NavItem>
                  <NavItem onClick={toggle} className="mobile">
                    <AnchorLink
                      offset="100"
                      className="nav-link"
                      href="#gallery"
                    >
                      Gallery
                    </AnchorLink>
                  </NavItem>
                  <NavItem onClick={toggle} className="mobile">
                    <AnchorLink
                      offset="100"
                      className="nav-link"
                      href="#contact"
                    >
                      Contact
                    </AnchorLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <Link href="/#events">
                      <a className="nav-link">News</a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/#projects">
                      <a className="nav-link">Events</a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/#gallery">
                      <a className="nav-link">Gallery</a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/#contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </NavItem>
                </>
              )}
              <div className="mobile mt-4">
                <a
                  href="https://www.facebook.com/volejbalmixstaralubovna"
                  target="_blank"
                >
                  <Facebook className="mr-4" />
                </a>
                <a
                  href="https://www.instagram.com/volejbalmixstaralubovna/?hl=sk"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

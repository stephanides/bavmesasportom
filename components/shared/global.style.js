import styled, { createGlobalStyle } from "styled-components";
import { PersonFill, ClockFill, GeoAlt } from "@styled-icons/bootstrap";
import {
  FacebookWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";
import { Menu } from "@styled-icons/entypo";

export const Hamburger = styled(Menu)`
  width: 42px;
  height: 42px;
  color: white;
  outline: none;
`;

export const Facebook = styled(FacebookWithCircle)`
  color: #ff007a;
  height: 52px;
  width: 52px;
  margin-right: 6px;
  &:hover {
    color: #d20055;
  }
`;

export const Instagram = styled(InstagramWithCircle)`
  color: #ff007a;
  height: 52px;
  width: 52px;
  &:hover {
    color: #d20055;
  }
`;

export const Person = styled(PersonFill)`
  color: #ff007a;
  height: 22px;
  width: 22px;
  margin-right: 2px;
`;

export const Clock = styled(ClockFill)`
  color: #ff007a;
  height: 22px;
  width: 22px;
  margin-right: 8px;
`;
export const Geo = styled(GeoAlt)`
  color: #ff007a;
  height: 22px;
  width: 22px;
  margin-right: 8px;
`;

export const Logo = styled.img`
  width: 200px;
  filter: invert(1);
  cursor: pointer;
`;
export const Wrapper = styled.div`
  margin-top: 100px;
`;

export const Background = styled.div`
  min-height: calc(100vh - 100px);
  background-image: url(/images/background.jpg);
  position: relative;
  background-size: cover;
`;
export const Overlay = styled.div`
  background-color: rgba(22, 19, 98, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
`;
export const Player = styled.img`
  position: absolute;
  right: 2rem;
  transform: scaleX(-1);
  bottom: 0;
  max-height: 100%;
  display: block;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const H2 = styled.h2`
  font-family: "Raleway", sans-serif;
  padding: 2rem 0;
  color: rgba(22, 19, 98, 1);
  font-weight: bold;
  font-size: 2.5rem;
`;

export const HeaderTextHolder = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  max-width: 500px;
  left: 20%;
  flex-direction: column;
  @media (max-width: 1200px) {
    left: 3rem;
  }
  @media (max-width: 500px) {
    left: 0rem;
    padding: 20px;
  }
`;
export const HeaderText = styled.h1`
  color: white;
  font-size: 3rem;
  font-family: "Raleway", sans-serif;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;
export const Button = styled.a`
  height: 55px;
  line-height: 55px;
  padding: 0 55px;
  font-size: 16px;
  font-weight: 700;
  color: white !important;
  text-transform: uppercase;
  background: #ff007a;
  outline: none;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  transition: all 0.4s ease;
  margin-top: 1rem;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background: #d20055;
    box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const ActionButton = styled.button`
  height: 55px;
  line-height: 55px;
  padding: 0 55px;
  font-size: 16px;
  font-weight: 700;
  color: white !important;
  text-transform: uppercase;
  background: #ff007a;
  outline: none;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  transition: all 0.4s ease;
  margin-top: 2rem;
  border: none;
  outline: none;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background: #d20055;
    box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img``;

export const ButtonSmall = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: white !important;
  text-transform: uppercase;
  background: #ff007a;
  outline: none;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  transition: all 0.4s ease;
  align-self: flex-start;
  margin-top: 1rem;
  padding: 8px 20px;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background: #d20055;
    box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 992px) {
    margin: 0 auto;
    margin-top: 1rem;
  }
`;

export const EventWrapper = styled.div`
  border: 2px solid #ebebeb;
  border-radius: 2px;
  margin-bottom: 40px;
  padding: 20px 40px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 12px 30px rgba(22, 19, 98, 0.25);
    border: 2px solid transparent;
  }
`;

export const EventImg = styled.div`
  width: 150px;
  border-radius: 50%;
  height: 150px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  @media (max-width: 992px) {
    display: block;
    margin: auto;
  }
`;

export const NewsTitle = styled.h3`
  font-family: "Raleway", sans-serif;
  color: rgba(22, 19, 98, 1);
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1rem;
  @media (max-width: 992px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const EventTitle = styled.h3`
  font-family: "Raleway", sans-serif;
  color: rgba(22, 19, 98, 1);
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  @media (max-width: 992px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
export const EventOrganizator = styled.p`
  color: rgba(22, 19, 98, 1);
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;
export const EventOrganizatorHolder = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  color: black;
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const Card = styled.div`
  padding: 40px 20px;
  text-align: center;
  box-shadow: 1px 3px 12px rgba(22, 19, 98, 0.25);
  height: 100%;
  h3 {
    margin-bottom: 2rem;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const FooterWrapper = styled.div`
  background: rgba(22, 19, 98, 1);
  width: 100%;
  display: flex;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
export const FooterLogo = styled.img`
  width: 200px;
  filter: invert(1);
`;

export const FooterText = styled.h6`
  color: white;
  font-size: 2rem;
`;

export const SubPageTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  padding: 2rem 0;
  color: rgba(22, 19, 98, 1);
  font-weight: bold;
  font-size: 2.5rem;
  margin-top: 100px;
`;

export const SubPageText = styled.p`
  color: rgba(22, 19, 98, 1);
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

export const LogoImg = styled.img`
  width: 300px;
  margin: 1rem;
`;
export const LogoSmallImg = styled.img`
  width: 150px;
  margin: 1rem;
  max-height: 200px;
`;

export const RegisterHolder = styled.div``;

export default createGlobalStyle`
  *{
    font-family: "Raleway",sans-serif;
  }
  #navigation{
    background: rgba(22,19,98,1);
    padding: 0 5vw;
  }
  .nav-link{
    position: relative;
    transition: transform .5s cubic-bezier(1,.25,0,.75) 0s;
    color: white;
    padding: 0.5rem 0 !important;
    margin-left: 1rem;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 4px;
      display:block;
      background-color: white;
      transform: scale(0,1);
      -webkit-transition: transform 0.4s cubic-bezier(1,0,0,1);
      transition: transform 0.4s cubic-bezier(1,0,0,1);
      @media(max-width: 992px){
        width: 100%;
      }
    }
    &:hover{
      color: white !important;
      text-transform: none;
    }
    &:hover:before {
      transform: scale(1);
    }
  }

  .vertical_center{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .vertical_between{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bg-page{
    background-color: rgba(22,19,98,1);
  }
  h4{
    font-family: "Raleway",sans-serif !important;
    color: rgba(22,19,98,1) !important;
    font-size: 1.25rem !important;
    font-weight: bold !important;
  }
  .link{
    height: 55px;
  line-height: 55px;
  padding: 0 55px;
  font-size: 16px;
  font-weight: 700;
  color: white !important;
  text-transform: uppercase;
  background: #ff007a;
  outline: none;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  transition: all 0.4s ease;
  align-self: flex-start;
  margin-top: 1rem;
  text-decoration: none !important;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background: #d20055;
    box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.15);
  }
  }
  .fixed-top{
    z-index: 999 !important;
  }
  .mobile-col{
    @media(max-width: 992px){
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
      text-align: center;
    }
  }
  .mb-40{ 
  margin-bottom: 40px;
  }
  #contact{
    text-align: left;
    @media(max-width: 992px){
      text-align: center;
    }
  }
  iframe{
    width: 100% !important;
  }
  .navbar-toggler{
    outline: none !important;
  }
  .mobile{
    display: none;
    @media(max-width: 768px){
      display: block;
    }
  }
  .nav{
    @media(max-width: 768px){
      flex-direction: column;
      text-align: center;
      height: 100vh;
      .nav-link{
        font-size: 3rem;
        &:before{
          display: none;
        }
      }
    }
  }
  .sponsors_holder{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;

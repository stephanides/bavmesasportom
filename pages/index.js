import { Button, Alert } from "reactstrap";
import Layout from "../components/shared/Layout";
import Header from "../components/Header";
import Events from "../components/Events";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
export default () => {
  return (
    <Layout>
      <Header />
      <Events />
      <Projects />
      <Gallery />
      <Sponsors />
      <Contact />
    </Layout>
  );
};

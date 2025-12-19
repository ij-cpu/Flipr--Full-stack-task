import Header from "../../components/Header";
import Projects from "./Projects";
import Clients from "./Clients";
import ContactForm from "./ContactForm";
import Newsletter from "./Newsletter";
import Footer from "../../components/Footer";

function Landing() {
  return (
    <>
      <Header />
      <Projects />
      <Clients />
      <ContactForm />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Landing;

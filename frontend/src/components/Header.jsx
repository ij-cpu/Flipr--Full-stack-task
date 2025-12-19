import "../styles/landing.css";

function Header() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Consultation, Design & Marketing</h1>
        <p>We help businesses grow digitally</p>
        <button onClick={scrollToContact}>
          Get Free Consultation
        </button>
      </div>
    </div>
  );
}

export default Header;

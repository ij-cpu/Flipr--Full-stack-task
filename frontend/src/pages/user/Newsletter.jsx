import { useState } from "react";
import API from "../../api/api";
import "../../styles/landing.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    await API.post("/subscribe", { email });
    alert("Subscribed");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>Subscribe to Newsletter</h2>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={subscribe}>Subscribe</button>
    </section>
  );
}

export default Newsletter;

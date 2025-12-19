import { useEffect, useState } from "react";
import API from "../../api/api";
import "../../styles/landing.css";

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    API.get("/clients")
      .then((res) => setClients(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <h2>Happy Clients</h2>

      <div className="client-grid">
        {clients.length === 0 && (
          <p style={{ textAlign: "center" }}>
            No clients added yet
          </p>
        )}

        {clients.map((c) => (
          <div className="client-card" key={c._id}>
            <img
              src={`http://localhost:5000/uploads/${c.image}`}
              alt={c.name}
            />
            <p>"{c.description}"</p>
            <h4>{c.name}</h4>
            <small>{c.designation}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;

import { useEffect, useState } from "react";
import API from "../api/api";

function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    API.get("/subscribe")
      .then((res) => setSubscribers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Subscribed Emails</h2>

      <ul>
        {subscribers.map((s, index) => (
          <li key={index}>{s.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Subscribers;

import { useEffect, useState } from "react";
import API from "../api/api";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/contact")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Contact Form Submissions</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, index) => (
            <tr key={index}>
              <td>{c.fullName}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>{c.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;

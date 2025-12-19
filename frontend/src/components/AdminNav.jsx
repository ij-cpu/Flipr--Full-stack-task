import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/admin">Add Project</Link> |{" "}
      <Link to="/admin/add-client">Add Client</Link> |{" "}
      <Link to="/admin/contacts">Contacts</Link> |{" "}
      <Link to="/admin/subscribers">Subscribers</Link>
    </nav>
  );
}

export default AdminNav;

import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/user/Landing";
import Admin from "./pages/Admin.jsx";

import AddProject from "./pages/AddProject";
import AddClient from "./pages/AddClient";
import Contacts from "./pages/Contacts";
import Subscribers from "./pages/Subscribers";
import "./styles/admin.css";

function App() {
  return (
    <>
      
      <nav className="admin-navbar">
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        
        <Route path="/" element={<Landing />} />

        
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin" element={<AddProject />} />
        <Route path="/admin" element={<AddClient />} />
        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/admin/subscribers" element={<Subscribers />} />
      </Routes>
    </>
  );
}

export default App;

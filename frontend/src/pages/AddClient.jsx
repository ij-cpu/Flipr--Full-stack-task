import { useState } from "react";
import API from "../api/api";
import "../styles/admin.css";

function AddClient() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await API.post("/clients", formData);
      alert("Client added successfully");

      // reset form
      setName("");
      setDesignation("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.log(error);
      alert("Error adding client");
    }
  };

  return (
    <div className="admin-container">
      <h2>Add Client</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />

        <textarea
          placeholder="Client Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit">Add Client</button>
      </form>
    </div>
  );
}

export default AddClient;

import { useState } from "react";
import API from "../api/api";
import "../styles/admin.css";
function AddProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await API.post("/projects", formData);
      setMessage("Project added successfully");
      setName("");
      setDescription("");
      setImage(null);
    } catch (error) {
      setMessage("Error adding project");
    }
  };

  return (
    <div className="admin-container">
      <h2>Add Project</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <br /><br />

        <button type="submit">Add Project</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddProject;

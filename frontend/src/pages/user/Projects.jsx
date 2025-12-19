import { useEffect, useState } from "react";
import API from "../../api/api";
import "../../styles/landing.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <h2>Our Projects</h2>

      <div className="project-grid">
        {projects.length === 0 && (
          <p style={{ textAlign: "center" }}>
            No projects added yet
          </p>
        )}

        {projects.map((p) => (
          <div className="project-card" key={p._id}>
            <img
              src={`http://localhost:5000/uploads/${p.image}`}
              alt={p.name}
            />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

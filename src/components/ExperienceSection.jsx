import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

export default function ExperienceSection() {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="experience-section">
      <button onClick={toggleShowMenu}>
        <h2>Experience</h2>
      </button>
      {showMenu && (
        <div className="menu">
          {showForm ? (
            <ExperienceForm handleCancel={toggleShowForm} />
          ) : (
            <button onClick={toggleShowForm}>+ Experience</button>
          )}
        </div>
      )}
    </div>
  );
}

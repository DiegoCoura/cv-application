import { useState } from "react";
import EducationForm from "./EducationForm";

export default function EducationSection({  onSubmit }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="education-section">
      <button onClick={toggleShowMenu}>
        <h2>Education</h2>
      </button>
      {showMenu && (
        <div className="menu">
          {showForm ? (
            <EducationForm handleCancel={toggleShowForm} onSubmit={onSubmit} />
          ) : (
            <button onClick={toggleShowForm}>+ Education</button>
          )}
        </div>
      )}
    </div>
  );
}

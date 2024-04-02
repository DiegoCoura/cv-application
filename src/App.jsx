import { useState } from "react";
import "./App.css";

import CvSection from "./components/CvSection";
import EditionMenu from "./components/EditionMenu";
import { EducationForm } from "./components/formsConstructors.js";

export default function App() {
  const [currentCv, setCurrentCv] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: [],
    experience: [],
  });

  function handleSubmitEducation(e) {
    console.log(e.target.school.value);
    e.preventDefault();
    let tempCv = currentCv;
    let currIndex = tempCv.education.length;
    const educationForm = new EducationForm(
      currIndex,
      e.target.school.value,
      e.target.degree.value,
      e.target.start.value,
      e.target.end.value,
      e.target.location.value
    );
    tempCv.education.push(educationForm);
    setCurrentCv(tempCv);
  }

  const handleChange = (e) => {
    setCurrentCv({ ...currentCv, [e.target.id]: e.target.value });
  };

  return (
    <div className="main-section">
      <EditionMenu
        onChange={handleChange}
        onSubmit={(e) => handleSubmitEducation(e)}
      />
      <CvSection cv={currentCv} />
    </div>
  );
}

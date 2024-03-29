import { useState } from "react";
import "./App.css";

import CvSection from "./components/CvSection";
import EditionMenu from "./components/EditionMenu";

function App() {
  const [currentCv, setCurrentCv] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: [],
    experience: [],
  });
  console.log(currentCv);

  const handleChange = (e) => {
    setCurrentCv({ ...currentCv, [e.target.id]: e.target.value });
  };

  return (
    <div className="main-section">
      <EditionMenu onChange={handleChange} />
      <CvSection cv={currentCv} />
    </div>
  );
}

export default App;

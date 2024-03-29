import EducationSection from "./EducationSection";
import GeneralSection from "./GeneralSection";
import PracticalSection from "./PracticalSection";

export default function EditionMenu({ onChange }) {
  return (
    <div className="edition-menu">
      <GeneralSection onChange={onChange}/>
      <EducationSection />
      <PracticalSection />
    </div>
  );
}

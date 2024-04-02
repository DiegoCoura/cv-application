import EducationSection from "./EducationSection";
import GeneralSection from "./GeneralSection";
import ExperienceSection from "./ExperienceSection";

export default function EditionMenu({ onChange, onSubmit }) {
  return (
    <div className="edition-menu">
      <GeneralSection onChange={onChange} />
      <EducationSection onSubmit={onSubmit} />
      <ExperienceSection onSubmit={onSubmit} />
    </div>
  );
}

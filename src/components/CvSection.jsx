export default function CvSection({ cv }) {
  return (
    <div className="cv-section">
      <header className="cv-header">
        <h1 className="cv-title">{cv.name}</h1>
        <div className="header-infos">
          <p className="email-header">{cv.email}</p>
          <p className="phone-header">{cv.phone}</p>
          <p className="address-header">{cv.address}</p>
        </div>
      </header>
      <div className="cv-main">
        <div className="education-section-cv">
          <h4 className="education-title"></h4>
          <div className="education-school-div"></div>
          <div className="education-time-div"></div>
        </div>
        <div className="professional-section-cv">
          <h4 className="professional-title"></h4>
          <div className="company-info-div"></div>
          <div className="experience-time-div"></div>
        </div>
      </div>
    </div>
  );
}

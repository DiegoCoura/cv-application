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
          <h4 className="education-title">Education</h4>
          {cv.education.map((item) => {
            console.log(item.startDate);
            <div className="education-infos">
              <div className="education-school-div">{item.school}</div>
              <div className="education-degree-div">{item.degree}</div>
              <div className="education-time-div">{item.startDate}</div>
              <div className="education-time-div">{item.endDate}</div>
              <div className="education-location-div">{item.location}</div>
            </div>;
          })}
        </div>
        <div className="professional-section-cv">
          <h4 className="professional-title">Professional Experience</h4>
          <div className="company-info-div"></div>
          <div className="experience-time-div"></div>
        </div>
      </div>
    </div>
  );
}

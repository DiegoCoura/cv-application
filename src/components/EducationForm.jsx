export default function EducationForm({ handleCancel, onChange, onSubmit }) {
   

  return (
    <form action="post" id="education-form" onSubmit={onSubmit}>
      <label htmlFor="school-input">School: </label>
      <input type="text" name="school" id="school-input" onChange={onChange}/>
      <br />

      <label htmlFor="degree-input">Degree: </label>
      <input type="text" name="degree" id="degree-input" onChange={onChange} />
      <br />

      <label htmlFor="start-date-input">Start Date: </label>
      <input type="date" name="start" id="start-date-input" onChange={onChange} />
      <br />

      <label htmlFor="end-date-input">End Date: </label>
      <input type="date" name="end" id="end-date-input" onChange={onChange} />
      <br />

      <label htmlFor="location-input">Location: </label>
      <input type="text" name="location" id="location-input" onChange={onChange} />
      <br />

      <button className="delete" type="button">delete</button>
      <button className="cancel" type="button" onClick={handleCancel}>cancel</button>
      <button type="submit">Save</button>
    </form>
  );
}

export default function PracticalSection() {
  return (
    <div className="practical-section">
      <h2>Experience</h2>
      <form action="post" id="experience-form">
        <label htmlFor="company-input">Company Name: </label>
        <input type="text" name="" id="company-input" />
        <br />

        <label htmlFor="position-input">Position: </label>
        <input type="text" name="" id="position-input" />
        <br />

        <label htmlFor="start-date-input">Start Date: </label>
        <input type="date" name="" id="start-date-input" />
        <br />

        <label htmlFor="end-date-input">End Date: </label>
        <input type="date" name="" id="end-date-input" />
        <br />

        <label htmlFor="location-input">Location: </label>
        <input type="text" name="" id="location-input" />
        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

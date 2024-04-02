export default function ExperienceForm({ handleCancel }) {
  return (
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

      <label htmlFor="description-input">Description: </label>
      <textarea type="text" name="" id="description-input" />
      <br />

      <button className="delete" type="button">
        delete
      </button>
      <button className="cancel" type="button" onClick={handleCancel}>
        cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
}

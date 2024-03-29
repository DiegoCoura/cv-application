export default function EducationSection(){
    return (
        <div className="education-section">
            <h2>Education</h2>
            <form action="post"id="education-form">
                <label htmlFor="school-input">School: </label>
                <input type="text" name="" id="school-input" /><br />

                <label htmlFor="degree-input">Degree: </label>
                <input type="text" name="" id="degree-input" /><br />

                <label htmlFor="start-date-input">Start Date: </label>
                <input type="date" name="" id="start-date-input" /><br />

                <label htmlFor="end-date-input">End Date: </label>
                <input type="date" name="" id="end-date-input" /><br />

                <label htmlFor="location-input">Location: </label>
                <input type="text" name="" id="location-input" /><br />

                <button type="submit">Save</button>
            </form>
        </div>
    )
}
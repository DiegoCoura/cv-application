export default function GeneralSection({onChange}){
    return (
        <div className="general-section">
            <h2>Personal Details</h2>
            <form action="post" id="general-form">
                <label htmlFor="name">Full Name: </label>
                <input type="text" name="full-name" id="name" onChange={onChange} /><br />

                <label htmlFor="email">Email: </label>
                <input type="email" name="" id="email" onChange={onChange} /><br />

                <label htmlFor="phone">Phone: </label>
                <input type="phone" name="" id="phone" onChange={onChange} /><br />

                <label htmlFor="address">Address: </label>
                <input type="text" name="" id="address" onChange={onChange} />
            </form>
        </div>
    )
}
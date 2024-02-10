function Contact({employeeData}){
    return (
        <div>
          
            <h4>Office</h4><p className="description">{employeeData.office}</p>
            <h4>Mobile</h4><p className="description">{employeeData.mobile}</p>
            <h4>SMS</h4><p className="description">{employeeData.sms}</p>
            <h4>Email</h4><p className="description">{employeeData.email}</p>
        </div>
    )
}

Contact.defaultProps = {
    office: "123-456-7890",
    mobile: "123-456-7890",
    sms: "123-456-7890",
    email: "email@example.com"
}
export default Contact;
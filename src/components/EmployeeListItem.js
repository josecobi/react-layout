function EmployeeListItem({employeeData}) {
  return (
    <div className="employeeListItem">
        <h4>{employeeData.name}</h4>
        <p className="description">{employeeData.title}</p>
    </div>
  )
}

export default EmployeeListItem
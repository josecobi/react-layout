function EmployeeCardHeader({employeeData}) {
  return (
    
    <div className="employeeCardHeader">
        <h2>{employeeData.name}</h2>
        <p className="description">{employeeData.title}</p>
    </div>
  )
}

export default EmployeeCardHeader
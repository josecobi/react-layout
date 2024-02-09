import EmployeeListItem from "./EmployeeListItem"

function EmployeeList({employeeData}) {
  
  return (
    <div className="employeeList">
        <ul className="employeeUl">
          {console.log("Employee data [0]: ", employeeData[0])}
          <EmployeeListItem employeeData={employeeData[0]} />
          <EmployeeListItem employeeData={employeeData[1]} />
          <EmployeeListItem employeeData={employeeData[2]} />
          <EmployeeListItem employeeData={employeeData[3]} />
          <EmployeeListItem employeeData={employeeData[4]} />
          <EmployeeListItem employeeData={employeeData[5]} />


       
             
        </ul>
    </div>
  )
}

export default EmployeeList
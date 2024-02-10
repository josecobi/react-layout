import Header from "./Header"
import EmployeeCard from "./EmployeeCard"
function EmployeePage({employeeData, employeePageHeader}) {
  return (
    <div className="employeepage">
        <Header emplyeePageHeader = {employeePageHeader}/>
        <EmployeeCard employeeData = {employeeData} />
    </div>
  )
}

export default EmployeePage
import Header from "./Header"
import EmployeeCard from "./EmployeeCard"
function EmployeePage({employeeData}) {
  return (
    <div className="employeepage">
        <Header />
       <EmployeeCard employeeData = {employeeData} />
    </div>
  )
}

export default EmployeePage
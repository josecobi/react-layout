import Contact from "./Contact"
import EmployeeCardHeader from "./EmployeeCardHeader"

function EmployeeCard({employeeData}) {
  return (
    <div className="employeeCard">
        <EmployeeCardHeader employeeData = {employeeData[1]}/> 
        <Contact employeeData = {employeeData[1]}/>
    </div>

  )
}

export default EmployeeCard
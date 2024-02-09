import PhoneNumber from "./PhoneNumber"
import EmployeeCarHeader from "./EmployeeCarHeader"

function EmployeeCard() {
  return (
    <div className="employeeCard">
        <EmployeeCarHeader /> 
        <PhoneNumber />
        <PhoneNumber />
        <PhoneNumber />
    </div>

  )
}

export default EmployeeCard
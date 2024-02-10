import EmployeeListItem from "./EmployeeListItem"

function EmployeeList({employeeData}) {
  
  return (
    <div className="employeeList">
        <ul className="employeeUl">
          {/* {console.log("Employee data [0]: ", employeeData[0])}
          <EmployeeListItem employeeData={employeeData[0]} />
          <EmployeeListItem employeeData={employeeData[1]} />
          <EmployeeListItem employeeData={employeeData[2]} />
          <EmployeeListItem employeeData={employeeData[3]} />
          <EmployeeListItem employeeData={employeeData[4]} />
          <EmployeeListItem employeeData={employeeData[5]} /> */}


          {/* map through the array and provide the index of the current element assign it to the prop 'key'. React uses the key to keep track of any changes in the list of components
           https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key */}
          
          {employeeData.map((employee, index) => {
            return(<EmployeeListItem employeeData={employee} key={index} />)
          })}
          
             
        </ul>
    </div>
  )
}

export default EmployeeList
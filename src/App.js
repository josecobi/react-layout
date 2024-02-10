import './App.css';
import Homepage from './components/Homepage';
import EmployeePage from './components/EmployeePage';



function App() {
  const employeeData = [
    {name: 'James King',
        title:"President and CEO",
        office: "123-456-7890",
        mobile:"012-345-6789",
        sms: "777-777-9311",
        email:"jk@me.me"},
    {name: 'Julie Taylor',
        title:"VP of Marketing",
        office: "123-456-7890",
        mobile:"012-345-6789",
        sms: "777-777-9311",
        email:"jt@me.me"},
    {name: 'Eugene Lee',
        title:"CFO",
        office: "123-456-7890",
        mobile:"012-345-6789",
        sms: "777-777-9311",
        email:"el@me.me"},
    {name: 'John Williams',
        title:"VP of Engineering",
        office: "123-456-7890",
        mobile:"012-345-6789",
        sms: "777-777-9311",
        email:"jw@me.me"},
    {name: 'Ray Moore',
        title:"VP of Sales",
        office: "123-456-7890",
        mobile:"012-345-6789",
        sms: "777-777-9311",
        email:"rm@me.me"},
    {name: 'Paul Jones',
        title:"QA Manager",
        office: "123-456-7890",
        mobile:"012-345-6789",
        sms: "777-777-9311",
        email:"pj@me.me"}
  ]

  const homepageHeader = "Employee Directory";
  const emplyeePageHeader = "Employee";
  return (
    <div className="App">
      <Homepage employeeData = {employeeData} homepageHeader = {homepageHeader}/>
      <EmployeePage employeeData = {employeeData} employeePageHeader = {emplyeePageHeader}/>
    </div>
  );
}

export default App;

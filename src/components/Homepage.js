import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

function Homepage({employeeData}) {
  return (
    <div className="homepage">
        <Header />
        <SearchBar />
        <EmployeeList employeeData = {employeeData} />
    </div>
  )
}

export default Homepage
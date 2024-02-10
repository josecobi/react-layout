import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

function Homepage({employeeData, homepageHeader}) {
  return (
    <div className="homepage">
        <Header homepageHeader = {homepageHeader}/>
        <SearchBar />
        <EmployeeList employeeData = {employeeData} />
    </div>
  )
}

export default Homepage
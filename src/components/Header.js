function Header({homepageHeader, emplyeePageHeader}) {
  if(emplyeePageHeader){
    return (
      <div className="header">
          <h1>{emplyeePageHeader}</h1>
      </div>
    )
  }
  else{
    return (
      <div className="header">
          <h1>{homepageHeader}</h1>
      </div>
    )
  }
}

export default Header
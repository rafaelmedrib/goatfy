// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Employees" titleTo="employees" buttonLabel="New Employee" buttonTo="newEmployee">
        <Route path="/employees/new" page={EmployeeNewEmployeePage} name="newEmployee" />
        <Route path="/employees/{id:Int}/edit" page={EmployeeEditEmployeePage} name="editEmployee" />
        <Route path="/employees/{id:Int}" page={EmployeeEmployeePage} name="employee" />
        <Route path="/employees" page={EmployeeEmployeesPage} name="employees" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

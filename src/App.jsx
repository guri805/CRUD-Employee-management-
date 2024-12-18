import React, { createContext, useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddEmp from './components/AddEmp'
// import ViewEmp from './components/ViewEmp'
import ListEmp from './components/ListEmp'

const ListContext = createContext();

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  return (
    <>
      <ListContext.Provider value={{ employeeList, setEmployeeList }}>
        <Router>
          <CustomNavbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<ListEmp />} />
              <Route path="/add" element={<AddEmp />} />
            </Routes>
          </div>
        </Router>
      </ListContext.Provider>

    </>
  )
}
export { ListContext }
export default App

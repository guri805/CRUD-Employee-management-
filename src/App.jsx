import React, { createContext, useState } from 'react'
import './App.css'
import CustomNavbar from './components/CustomNavbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddEmp from './components/AddEmp'
import ListEmp from './components/ListEmp'
import ViewEmp from './components/ViewEmp'

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
              <Route path="/view/:id" element={<ViewEmp />}/>
            </Routes>
          </div>
        </Router>
      </ListContext.Provider>

    </>
  )
}
export { ListContext }
export default App

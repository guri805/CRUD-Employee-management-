import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { ListContext } from '../App';
import { FaPlus } from 'react-icons/fa';

const ViewEmp = () => {
  const { employeeList } = useContext(ListContext);
  const [viewData, setViewData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const filtered = employeeList?.filter((_, index) => index + 1 == id);
      setViewData(filtered?.[0] || null); 
    }
  }, [id, employeeList]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
              <h2 className="mb-0">View Employee</h2>
              <NavLink to="/" className="btn btn-light btn-sm d-flex align-items-center">
                 Back Home
              </NavLink>
            </div>
            <div className="card-body p-4">
              {viewData ? (
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>S.no</th>
                      <th>Employee Name</th>
                      <th>Employee Id</th>
                      <th>Designation</th>
                      <th>Email</th>
                      <th>Education</th>
                      <th>Address</th>
                      <th>Salary</th>
                      <th>Joining</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{id}</td>
                      <td>{viewData?.name}</td>
                      <td>{viewData?.id}</td>
                      <td>{viewData?.designation}</td>
                      <td>{viewData?.email}</td>
                      <td>{viewData?.education}</td>
                      <td>{viewData?.address}</td>
                      <td>{viewData?.salary}</td>
                      <td>{viewData?.joining}</td>
                    </tr>
                  </tbody>
                </Table>
              ) : (
                <div className="text-center text-muted">
                  <p>No employee found with ID: {id}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;

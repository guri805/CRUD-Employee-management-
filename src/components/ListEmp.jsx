import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { ListContext } from '../App';
import { FaPlus } from 'react-icons/fa';

const ListEmp = () => {
    const { employeeList, setEmployeeList } = useContext(ListContext);

    const navigate = useNavigate();

    const handleView = (index) => {
        navigate(`/view/${index + 1}`)
    }

    const handleDelete = (index) => {
        const afterDelete = employeeList?.filter((_, ind) => ind !== index);
        setEmployeeList(afterDelete);
    };

    const handleUpdate = (emp, index) => {
        navigate("/add", { state: { data: emp, ind: index } })
    }
    // console.log('Employee List in ListEmp:', employeeList);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
                            <h2 className="mb-0">Employee List</h2>
                            <NavLink to="/add" className="btn btn-light btn-sm d-flex align-items-center">
                                <FaPlus className="me-2" /> Create New
                            </NavLink>
                        </div>
                        <div className="card-body p-4">
                            <Table striped bordered hover responsive>
                                <thead className="table-dark">
                                    <tr>
                                        <th>S.no</th>
                                        <th>Name</th>
                                        <th>Employee Id</th>
                                        <th>Designation</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employeeList && employeeList.length > 0 ? (
                                        employeeList?.map((employee, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{employee?.name}</td>
                                                <td>{employee?.id}</td>
                                                <td>{employee?.designation}</td>
                                                <td>{employee?.email}</td>
                                                <td >
                                                    <div className='d-flex gap-2'>
                                                        <i class="fa-solid fa-eye" onClick={() => handleView(index)}></i>
                                                        <i class="fa-regular fa-pen-to-square" onClick={() => handleUpdate(employee, index)}></i>
                                                        <i class="fa-solid fa-trash" onClick={() => handleDelete(index)}></i>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="9" className="text-center text-muted">
                                                No employees found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListEmp;

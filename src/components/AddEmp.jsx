import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ListContext } from '../App';
const AddEmp = () => {
    const { employeeList, setEmployeeList } = useContext(ListContext); 
    console.log('Employee List in AddEmp:', employeeList);
    const [data, setData] = useState({
        name: "",
        id: "",
        designation: "",
        email: "",
        education: "",
        address: "",
        salary: "",
        joining: "",
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleFormData = (e) => {
        e.preventDefault();
        setEmployeeList([...employeeList,data])
        setData({
            name: "",
            id: "",
            designation: "",
            email: "",
            education: "",
            address: "",
            salary: "",
            joining: "",
        })
    };
    console.log(data);
   

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white text-center">
                            <h2>Add Employee</h2>
                        </div>
                        <div className="card-body">
                            <p className="text-muted text-center">Fill in the details below to add a new employee.</p>
                            <Form onSubmit={handleFormData}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <Form.Label className="fw-bold">Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter full name"
                                            value={data.name}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label className="fw-bold">Employee ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            placeholder="Enter employee ID"
                                            value={data.id}
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <Form.Label className="fw-bold">Designation</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="designation"
                                            placeholder="Enter designation"
                                            value={data.designation}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label className="fw-bold">Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter email address"
                                            value={data.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <Form.Label className="fw-bold">Education</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="education"
                                            placeholder="Enter education details"
                                            value={data.education}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label className="fw-bold">Address</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={2}
                                            name="address"
                                            placeholder="Enter address"
                                            value={data.address}
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <Form.Label className="fw-bold">Salary</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="salary"
                                            placeholder="Enter salary"
                                            value={data.salary}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label className="fw-bold">Joining Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="joining"
                                            value={data.joining}
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-4">
                                    <Button variant="primary" type="submit" className="px-4" >
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmp;

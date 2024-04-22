import React, { useEffect, useState } from "react";
import "../../../assets/Syles/admin.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FiEdit } from "react-icons/fi";
import ModalForm from "../../../components/ModalForm";
import EditForm from "./EditForm";

const User = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  const [data, setData] = useState([]);
  const [places, setPlaces] = useState([]);
  const [lodaing, setLodaing] = useState([false]);
  const [filter, setFilter] = useState(data);
  let componenetmounted = true;
  useEffect(() => {
    const getData = async () => {
      setLodaing(true);
      const response = await fetch("http://localhost:8080/api/v1/allusers");
      if (componenetmounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLodaing(false);
      }
      return () => {
        componenetmounted = false;
      };
    };
    getData();
  }, []);


  const handleAddUser = () => {
    setIsAddModalOpen(true);
  };

  const handleSaveUser = () => {
    // Save user data
    setIsAddModalOpen(false); // Close the add user modal
    setIsEditModalOpen(false); // Close the edit user modal
  };

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <div className="content  mt-6 ">
      <div style={{ textAlign: "end" }}>
        <button className="add-btn" onClick={handleAddUser}>
          Add User
        </button>
      </div>
      <Modal isOpen={isAddModalOpen} toggle={toggleAddModal}>
        <ModalHeader toggle={toggleAddModal}>Add User</ModalHeader>
        <ModalBody>
        <EditForm isOpen={isAddModalOpen} toggleModal={toggleAddModal} handleSubmit={handleSaveUser}/>
        </ModalBody>
      </Modal>
      <Modal isOpen={isEditModalOpen} toggle={toggleEditModal}>
        <ModalHeader toggle={toggleEditModal}>Edit User</ModalHeader>
        <ModalBody>
        <ModalForm isOpen={isEditModalOpen} toggleModal={toggleEditModal} handleSubmit={handleSaveUser} />
        </ModalBody>
        <ModalFooter>
          <button className="add-btn" onClick={handleSaveUser}>
            Save
          </button>
          <button className="add-btn" onClick={toggleEditModal}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
      <Row>
        <Col md="12">
          <Card>
            <CardHeader className="card-header">
              <CardTitle tag="h4" className="CardTitle">
                Users
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.emailid}</td>
                    <td>{user.contact}</td>
                    <td>{user.firstname}</td>
                    <td>
                    <FiEdit onClick={toggleEditModal} />
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default User;

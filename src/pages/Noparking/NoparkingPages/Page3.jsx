import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { IoEyeOutline } from "react-icons/io5";

const Page3 = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8080/api/v1/allvehicles");
      const jsonData = await response.json();
      setData(jsonData);
    };

    getData();
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const renderPagination = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <PaginationItem key={i + 1} active={i + 1 === currentPage}>
        <PaginationLink onClick={() => handleClick(i + 1)}>
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    ));
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="content mt-6">
      <Row>
        <Col md="12">
          <CardHeader className="card-header">
            <CardTitle tag="h4" className="CardTitle">
            <h2 align="center" font-weight="bold">Today Entered Vehicles</h2>
            <p> </p>
            <p> </p>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
              <thead className="text-primary">
                <tr>
                  <th>Vehicle Number</th>
                  <th>Entry Time</th>
                  {/* <th>Duration</th> */}
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((user) => (
                  <tr key={user.id}>
                    <td>{user.vehicle_no}</td>
                    <td>{user.entry_time}</td>
                    <td>
                      <Button
                        color="link"
                        onClick={() => handleImageClick(user.image)}
                        size="sm"
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <IoEyeOutline size={20} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination style={{ width: "100%", justifyContent: "center" }}>
              <PaginationItem disabled={currentPage === 1}>
                <PaginationLink
                  previous
                  onClick={() => handleClick(currentPage - 1)}
                />
              </PaginationItem>
              {renderPagination()}
              <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink
                  next
                  onClick={() => handleClick(currentPage + 1)}
                />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Col>
      </Row>
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        <ModalBody>
          <img src={selectedImage} alt="Selected" style={{ width: "100%" }} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Page3;

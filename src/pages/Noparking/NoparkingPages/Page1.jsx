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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { IoEyeOutline } from "react-icons/io5";

const Page1 = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [collectModalOpen, setCollectModalOpen] = useState(false);
  const [collectedItems, setCollectedItems] = useState([]);
  const [clickedvehicleNo, setClickedvehicleNo] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");


  // const [collectedItems, setCollectedItems] = useState([]);

  const handleCollectOption = (option, vehicleNo) => {
    // Make POST request based on the selected option
    if (option === "Cash Collect") {
      fetch('http://localhost:8080/api/cash-collection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vehicleNo }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // handle success if needed
          console.log('Cash collected successfully');
          // Update state or perform any other actions as needed
          setCollectedItems(prevItems => [...prevItems, vehicleNo]);
        })
        .catch(error => {
          console.error('Error:', error);
          // handle error if needed
        });
    } else if (option === "Online Collect") {
      fetch('http://localhost:8080/api/v1/collect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vehicleNo }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // handle success if needed
          console.log('Online collection success');
          // Update state or perform any other actions as needed
          setCollectedItems(prevItems => [...prevItems, vehicleNo]);
        })
        .catch(error => {
          console.error('Error:', error);
          // handle error if needed
        });
    }
  };



  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8080/api/v1/penaltyvehicles");




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

  const handleCollect = (vehicleNo) => {
    setCollectModalOpen(true);
    setClickedvehicleNo(vehicleNo);
  };

  // const handleCollectOption = (option) => {
  //   setCollectModalOpen(false);
  //   const updatedItems = [...collectedItems];
  //   updatedItems.push(clickedvehicleNo);
  //   setCollectedItems(updatedItems);
  // };


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    toggleDropdown();
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
            <CardTitle tag="h4" className="CardTitle" >
              <h2 align="center" font-weight="bold">Collect Penalty</h2>
              <p> </p>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
              <thead className="text-primary">
                <tr>
                  <th>Vehicle Number</th>
                  <th>Entry Time</th>
                  <th>IMAGE</th>
                  <th>Collect</th>
                  {/* <th>Collection</th>
                  <th>Image</th> */}
                </tr>
              </thead>
              <tbody>
                {currentRows.map((user) => (
                  <tr key={user.id}>
                    <td>{user.vehicle_no}</td>
                    <td>{user.entry_time}</td>
                    {/* <td>{user.phone}</td>
                    <td>{user.collected}</td> */}
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
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={() => handleCollect(user.vehicle_no)} // Pass vehicle number to handleCollect
                      >
                        {collectedItems.includes(user.vehicle_no)
                          ? "Collected"
                          : "Collect"}
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
      <Modal
        isOpen={collectModalOpen}
        toggle={() => setCollectModalOpen(false)}
      >
        <ModalBody>
          <h5>Choose Collection Method:</h5>
          <Button color="primary"
            size="sm" onClick={() => handleCollectOption("Cash Collect", clickedvehicleNo)}>Cash Collect</Button>

          <Button color="primary"
            size="sm" onClick={() => handleCollectOption("Online Collect", clickedvehicleNo)}>Online Collect</Button>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              {selectedCategory || "Select Category"}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => handleCategorySelect("Two Wheeler")}>Two Wheeler</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Page1;

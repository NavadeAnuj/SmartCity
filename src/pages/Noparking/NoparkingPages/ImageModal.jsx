import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ImageModal = ({ isOpen, toggle, imageUrl }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Image</ModalHeader>
      <ModalBody>
        <img src={imageUrl} alt="Product" style={{ height:"50%" , width:"50%"}} />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ImageModal;

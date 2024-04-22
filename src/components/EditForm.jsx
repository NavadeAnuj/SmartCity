import React, { useState } from "react";

const EditForm = ({ isOpen, toggleModal, userId }) => {
  const [userName, setUserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailid, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!userName.trim()) {
      errors.userName = "User Name is required";
    }

    if (!firstname.trim()) {
      errors.firstname = "First Name is required";
    }

    if (!lastname.trim()) {
      errors.lastname = "Last Name is required";
    }

    if (!emailid.trim()) {
      errors.emailid = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailid)) {
      errors.emailid = "Email is invalid";
    }

    if (!contact.trim()) {
      errors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = "Contact number should be 10 digits";
    }

    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            firstname,
            lastname,
            emailid,
            contact,
          }),
        });

        if (response.ok) {
          // Form submission successful
          console.log("Form submitted successfully");
          // Optionally, clear the form fields
          setUserName("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setContact("");
          // Close the modal
          toggleModal();
        } else {
          // Form submission failed
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // Set errors state to trigger error messages
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          className={`form-control ${errors.userName && "is-invalid"}`}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.userName && (
          <div className="invalid-feedback">{errors.userName}</div>
        )}
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className={`form-control ${errors.firstname && "is-invalid"}`}
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstname && (
          <div className="invalid-feedback">{errors.firstname}</div>
        )}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className={`form-control ${errors.lastname && "is-invalid"}`}
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastname && (
          <div className="invalid-feedback">{errors.lastname}</div>
        )}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className={`form-control ${errors.emailid && "is-invalid"}`}
          value={emailid}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.emailid && (
          <div className="invalid-feedback">{errors.emailid}</div>
        )}
      </div>
      <div className="form-group">
        <label>Contact</label>
        <input
          type="text"
          className={`form-control ${errors.contact && "is-invalid"}`}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        {errors.contact && (
          <div className="invalid-feedback">{errors.contact}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default EditForm;

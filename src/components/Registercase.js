import React, { useState } from "react";
import "./Registercase.css"; // Import the CSS file

const CaseRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    gender: "",
    personName: "",
    personAge: "",
    personGender: "",
    personAddress: "",
    file: null,
    isHandicap: false,
    permissionGranted: false,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Replace with API call to save form data
  };

  return (
    <div className="form-container">
      <h2>Case Registration Form</h2>
      <h4>Personal Information</h4>
      <form onSubmit={handleSubmit} className="form">
        {/* User Information */}
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Person in Need Information */}
        <div className="form-group">
          <h2>Person information</h2>
          <label>Person's Name</label>
          <input
            type="text"
            name="personName"
            value={formData.personName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Person's Age</label>
          <input
            type="number"
            name="personAge"
            value={formData.personAge}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Person's Gender</label>
          <select
            name="personGender"
            value={formData.personGender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Person's Address</label>
          <textarea
            name="personAddress"
            value={formData.personAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Upload File (Photo)</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="isHandicap"
                checked={formData.isHandicap}
                onChange={handleChange}
              />
              Is the person handicapped?
            </label>
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="permissionGranted"
                checked={formData.permissionGranted}
                onChange={handleChange}
                required
              />
              Did you get permission from the person?
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="button">
          <h3>Submit Case</h3>
        </button>
      </form>
    </div>
  );
};

export default CaseRegistrationForm;

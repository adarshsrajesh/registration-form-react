import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          errorMsg = 'Name is required.';
        }
        break;
      case 'address':
        if (!value.trim()) {
          errorMsg = 'Address is required.';
        }
        break;
      case 'mobile':
        if (!/^\d{10}$/.test(value)) {
          errorMsg = 'Mobile number must be 10 digits.';
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          errorMsg = 'Email is invalid.';
        }
        break;
      case 'gender':
        if (!value) {
          errorMsg = 'Gender is required.';
        }
        break;
      case 'dob':
        if (!value) {
          errorMsg = 'Date of Birth is required.';
        }
        break;
      case 'course':
        if (!value) {
          errorMsg = 'Course selection is required.';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: errorMsg,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = Object.values(errors).every((error) => !error) && Object.values(formData).every((field) => field.trim());

    if (isValid) {
      alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
      setFormData({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: ''
      });
      setErrors({});
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    });
    setErrors({});
  };

  return (
    <div style={{width:'700px', marginLeft:'400px'}} className="">
        <h1>Registration form</h1>
     
      <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
        {['name', 'address', 'mobile', 'email', 'dob', 'course'].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type={field === 'dob' ? 'date' : 'text'}
              className="form-control"
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
            {errors[field] && <div className="text-danger">{errors[field]}</div>}
          </div>
        ))}
        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <div className="text-danger">{errors.gender}</div>}
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Register</button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;

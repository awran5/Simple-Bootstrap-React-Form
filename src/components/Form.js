import React, { useState } from "react";

export default function Form({ onChange, onSubmit }) {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    city: "",
    state: "",
    zip: "",
    select: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    onChange({ [name]: value });
    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formValue);
    setFormValue({
      firstName: "",
      lastName: "",
      userName: "",
      city: "",
      state: "",
      zip: "",
      select: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="validationDefault01">First name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="validationDefault01"
            placeholder="First name"
            value={formValue.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationDefault02">Last name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="validationDefault02"
            placeholder="Last name"
            value={formValue.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationDefaultUsername">Username</label>
          <div className="input-group">
            <input
              type="text"
              name="userName"
              value={formValue.userName}
              onChange={handleChange}
              className="form-control"
              id="validationDefaultUsername"
              placeholder="Username"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault03">City</label>
          <input
            type="text"
            name="city"
            value={formValue.city}
            onChange={handleChange}
            className="form-control"
            id="validationDefault03"
            placeholder="City"
            required
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationDefault04">State</label>
          <input
            type="text"
            name="state"
            value={formValue.state}
            onChange={handleChange}
            className="form-control"
            id="validationDefault04"
            placeholder="State"
            required
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationDefault05">Zip</label>
          <input
            type="number"
            name="zip"
            value={formValue.zip}
            onChange={handleChange}
            className="form-control"
            id="validationDefault05"
            placeholder="Zip"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="FormControlSelect">Example select</label>
        <select
          className="form-control"
          name="select"
          onChange={handleChange}
          required
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <button className="btn btn-danger" type="submit">
        Submit
      </button>
    </form>
  );
}

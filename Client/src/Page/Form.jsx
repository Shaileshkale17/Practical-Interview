import React, { useState } from "react";

const Form = () => {
  const [Fullname, setFullname] = useState("");
  const [Address, setAddress] = useState("");
  const [country, setcountry] = useState("");
  const [pincode, setpincode] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    const form = {
      Fullname,
      Address,
      country,
      pincode,
    };
    console.log(form);
  };

  return (
    <div className="form-Data">
      <h1>Client info</h1>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="FullName">FullName</label>
          <input
            type="text"
            name="FullName"
            id="FullName"
            onChange={(e) => setFullname(e.target.value)}
            value={Fullname}
            required
          />
        </div>
        <div>
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            name="Address"
            id="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={Address}
            required
          />
        </div>
        <div>
          <label htmlFor="country">country</label>
          <select
            name="country"
            id="country"
            onChange={(e) => setcountry(e.target.value)}
            value={country}
            required>
            <option value="US">United States</option>
            <option value="Australia">Australia</option>
            <option value="india">india</option>
            <option value="Bangladash">Bangladash</option>
            <option value="Italy">Italy</option>
          </select>
        </div>
        <div>
          <label htmlFor="pincode">PinCode</label>
          <input
            type="text"
            name="pincode"
            id="pincode"
            onChange={(e) => setpincode(e.target.value)}
            value={pincode}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

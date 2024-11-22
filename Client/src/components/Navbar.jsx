import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ margin: "0 10px" }}>
        Manage Beneficiaries
      </Link>
      <Link to="/add" style={{ margin: "0 10px" }}>
        Add Beneficiary
      </Link>
    </nav>
  );
};

export default Navbar;

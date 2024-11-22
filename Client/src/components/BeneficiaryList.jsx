import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import { Link } from "react-router-dom";

const BeneficiaryList = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    axiosInstance.get("/beneficiaries").then((response) => {
      setBeneficiaries(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axiosInstance.delete(`/beneficiaries/${id}`).then(() => {
      setBeneficiaries(beneficiaries.filter((b) => b._id !== id));
    });
  };

  return (
    <div>
      <h2>Beneficiaries</h2>
      <ul>
        {beneficiaries.map((b) => (
          <li key={b._id}>
            {b.fullName} - {b.country}
            <Link to={`/edit/${b._id}`} style={{ margin: "0 10px" }}>
              Edit
            </Link>
            <button onClick={() => handleDelete(b._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeneficiaryList;

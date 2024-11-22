import React from "react";
import { useNavigate } from "react-router-dom";
import BeneficiaryForm from "../components/BeneficiaryForm";
import axiosInstance from "../api/axios";

const AddBeneficiary = () => {
  const navigate = useNavigate();

  const handleAdd = (data) => {
    axiosInstance.post("/beneficiaries", data).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="BeneficiaryForm">
      <h2>Add Beneficiary</h2>
      <BeneficiaryForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddBeneficiary;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BeneficiaryForm from "../components/BeneficiaryForm";
import axiosInstance from "../api/axios";

const EditBeneficiary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [defaultValues, setDefaultValues] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/beneficiaries/${id}`).then((response) => {
      setDefaultValues(response.data);
      console.log(response);
    });
  }, [id]);
  const handleEdit = (data) => {
    axiosInstance.put(`/beneficiaries/${id}`, data).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <h2>Edit Beneficiary</h2>
      {defaultValues && (
        <BeneficiaryForm onSubmit={handleEdit} defaultValues={defaultValues} />
      )}
    </div>
  );
};

export default EditBeneficiary;

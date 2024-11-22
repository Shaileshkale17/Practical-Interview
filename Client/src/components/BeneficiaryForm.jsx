import React from "react";
import { useForm } from "react-hook-form";

const BeneficiaryForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Full Name:</label>
        <input {...register("fullName", { required: true })} />
      </div>
      <div>
        <label>Address:</label>
        <input {...register("address", { required: true })} />
      </div>
      <div>
        <label>Country:</label>
        <select {...register("country", { required: true })}>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
      </div>
      <div>
        <label>Pincode:</label>
        <input {...register("pincode", { required: true })} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BeneficiaryForm;

import mongoose from "mongoose";

const beneficiarySchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  { timestamps: true }
);

const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema);

export default Beneficiary;

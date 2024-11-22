import express from "express";
import Beneficiary from "../models/Beneficiary.js";

const router = express.Router();

// Add a new beneficiary
router.post("/", async (req, res) => {
  const { fullName, address, country, pincode } = req.body;

  try {
    const beneficiary = await Beneficiary.create({
      fullName,
      address,
      country,
      pincode,
    });
    res.status(201).json(beneficiary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all beneficiaries
router.get("/", async (req, res) => {
  try {
    const beneficiaries = await Beneficiary.find();
    res.status(200).json(beneficiaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { fullName, address, country, pincode } = req.body;

  try {
    const beneficiary = await Beneficiary.findByIdAndUpdate(
      id,
      { fullName, address, country, pincode },
      { new: true }
    );
    if (!beneficiary)
      return res.status(404).json({ message: "Beneficiary not found" });
    res.status(200).json(beneficiary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const beneficiary = await Beneficiary.findByIdAndDelete(id);
    if (!beneficiary)
      return res.status(404).json({ message: "Beneficiary not found" });
    res.status(200).json({ message: "Beneficiary deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

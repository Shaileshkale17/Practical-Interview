import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBeneficiary from "./Page/AddBeneficiary";
import EditBeneficiary from "./Page/EditBeneficiary";
import ManageBeneficiaries from "./Page/ManageBeneficiaries";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ManageBeneficiaries />} />
        <Route path="/add" element={<AddBeneficiary />} />
        <Route path="/edit/:id" element={<EditBeneficiary />} />
      </Routes>
    </Router>
  );
}

export default App;

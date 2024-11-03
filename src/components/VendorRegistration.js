// components/VendorRegistration.js
import React, { useState } from 'react';

const VendorRegistration = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [complianceDate, setComplianceDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVendor = { name, contact, complianceDate };
    onRegister(newVendor);
    setName('');
    setContact('');
    setComplianceDate('');
  };

  return (
    <div>
      <h2>Vendor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Vendor Name" required />
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact Info" required />
        <input type="date" value={complianceDate} onChange={(e) => setComplianceDate(e.target.value)} required />
        <button type="submit">Register Vendor</button>
      </form>
    </div>
  );
};

export default VendorRegistration;

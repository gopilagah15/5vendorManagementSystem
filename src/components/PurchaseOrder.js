// components/PurchaseOrder.js
import React, { useState } from 'react';

const PurchaseOrder = ({ vendors, onCreateOrder }) => {
  const [vendorId, setVendorId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { vendorId, amount, date: new Date().toLocaleDateString() };
    onCreateOrder(order);
    setVendorId('');
    setAmount('');
  };

  return (
    <div>
      <h2>Purchase Order Generation</h2>
      <form onSubmit={handleSubmit}>
        <select value={vendorId} onChange={(e) => setVendorId(e.target.value)} required>
          <option value="">Select Vendor</option>
          {vendors.map((vendor, index) => (
            <option key={index} value={index}>{vendor.name}</option>
          ))}
        </select>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Order Amount" required />
        <button type="submit">Generate Order</button>
      </form>
    </div>
  );
};

export default PurchaseOrder;

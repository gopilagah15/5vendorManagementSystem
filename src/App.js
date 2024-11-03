// App.js
import React, { useState } from 'react';
import VendorRegistration from './components/VendorRegistration';
import ComplianceAlerts from './components/ComplianceAlerts';
import PurchaseOrder from './components/PurchaseOrder';
import VendorPerformanceReport from './components/VendorPerformanceReport';

const App = () => {
  const [vendors, setVendors] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const handleRegisterVendor = (vendor) => {
    setVendors([...vendors, vendor]);
  };

  const handleCreatePurchaseOrder = (order) => {
    setPurchaseOrders([...purchaseOrders, order]);
  };

  const handleComplianceAlert = (alert) => {
    setAlerts([...alerts, alert]);
  };

  return (
    <div>
      <h1>Vendor Management System</h1>
      <VendorRegistration onRegister={handleRegisterVendor} />
      <ComplianceAlerts alerts={alerts} />
      <PurchaseOrder vendors={vendors} onCreateOrder={handleCreatePurchaseOrder} />
      <VendorPerformanceReport vendors={vendors} purchaseOrders={purchaseOrders} />
    </div>
  );
};

export default App;

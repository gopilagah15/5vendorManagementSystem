// components/VendorPerformanceReport.js
import React from 'react';

const VendorPerformanceReport = ({ vendors, purchaseOrders }) => {
  return (
    <div>
      <h2>Vendor Performance Report</h2>
      <ul>
        {vendors.map((vendor, index) => {
          const orders = purchaseOrders.filter(order => order.vendorId == index);
          const totalAmount = orders.reduce((acc, order) => acc + parseFloat(order.amount), 0);
          return (
            <li key={index}>
              {vendor.name}: Total Orders - {orders.length}, Total Amount - ${totalAmount}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VendorPerformanceReport;

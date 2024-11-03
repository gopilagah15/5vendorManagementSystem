// components/ComplianceAlerts.js
import React, { useEffect, useState } from 'react';

const ComplianceAlerts = ({ alerts }) => {
  return (
    <div>
      <h2>Compliance Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComplianceAlerts;

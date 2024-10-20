import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Client/ClientStyle.css'; // Import the scoped CSS

function ClientDashboard() {
  const navigate = useNavigate();

  const handleApplication = () => {
    navigate('/applicationReg');
  };

  const handleTrackApplication = () => {
    navigate('/trackApplication'); // Add navigation for tracking application
  };

  const handleViewRewards = () => {
    navigate('/viewRewards'); // Add navigation for viewing rewards
  };

  return (
    <div className="client-dashboard"> {/* Use scoped class */}
      <main>
        <h1>Welcome to Energy Link</h1>
        <h2>
          Sell Your Excess Electricity and Contribute to a Greener Future
        </h2>
        <p>
          Empower your community by turning your surplus energy into revenue.
          Join us in building a sustainable future and earn credits for the energy you generate!
        </p>
        <div className="dashboard-buttons"> {/* Add class for button layout */}
          <button onClick={handleApplication} className="buttonDash">
            Create New Application
          </button>
          <button onClick={handleTrackApplication} className="buttonDash">
            Track Existing Application
          </button>
          <button onClick={handleViewRewards} className="buttonDash">
            View Reward Points
          </button>
        </div>
      </main>
    </div>
  );
}

export default ClientDashboard;

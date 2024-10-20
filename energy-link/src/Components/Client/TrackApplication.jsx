import React, { useState } from 'react';
import './Tracking.css'; // Create this file for styling

const steps = [
  'REGISTRATION SUBMISSION',
  'APPLICATION REVIEW',
  'VALIDATION',
  'EVALUATION',
  'APPROVAL OR DENIAL'
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="process-tracker">
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className={`step ${currentStep === index + 1 ? 'active' : ''}`}>
            <div className="circle">{index + 1}</div>
            <div className="label">{step}</div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePreviousStep} disabled={currentStep === 1}>Previous</button>
        <button onClick={handleNextStep} disabled={currentStep === steps.length}>Next</button>
      </div>
    </div>
  );
}

export default App;
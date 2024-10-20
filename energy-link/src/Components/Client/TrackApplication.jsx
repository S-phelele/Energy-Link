import React, { useState } from 'react';
import '../Client/Tracking.css';

function TrackApplication() {
    const [applicationId, setApplicationId] = useState('');
    const [applicationStatus, setApplicationStatus] = useState('');
    const [error, setError] = useState('');

    const handleTrackApplication = (e) => {
        e.preventDefault();

        if (applicationId === '12345') {
            setApplicationStatus('Your application is currently being reviewed.');
            setError('');
        } else {
            setError('Application not found. Please check the ID and try again.');
            setApplicationStatus('');
        }
    };

    return (
        <div className="track-container">
            <div className="content-box">
                <h2>Track Your Application</h2>
                <form onSubmit={handleTrackApplication}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter Application ID"
                            value={applicationId}
                            onChange={(e) => setApplicationId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="track-btn">Track Application</button>
                </form>

                {/* Diagram Representation */}
                <div className="diagram-container">
                    <div className="diagram-box">
                        {error && <div className="error-message">{error}</div>}
                        {applicationStatus && <div className="status-message">{applicationStatus}</div>}
                    </div>
                    <div className="diagram-line" />
                    <div className="diagram-box">Application Submitted</div>
                    <div className="diagram-line" />
                    <div className="diagram-box">Under Review</div>
                    <div className="diagram-line" />
                    <div className="diagram-box">Application Approved</div>
                </div>
            </div>
        </div>
    );
}

export default TrackApplication;

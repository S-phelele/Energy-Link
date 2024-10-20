import React, { useState, useEffect } from 'react';
import '../Admin/AdminStyle.css';

function AdminDashboard() {
  const [generators, setGenerators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reportData, setReportData] = useState(null);
  const [timeRange, setTimeRange] = useState('days');
  const [rangeValue, setRangeValue] = useState(7); // Default to 7 days

  useEffect(() => {
    // Simulating fetching generator data from an API
    const fetchGeneratorData = async () => {
      setLoading(true);
      try {
        // Replace this with an actual API call
        const mockData = [
          { id: 1, name: 'Generator A', progress: 70, status: 'In Progress', updatedAt: '2024-10-10' },
          { id: 2, name: 'Generator B', progress: 40, status: 'Pending Approval', updatedAt: '2024-09-20' },
          { id: 3, name: 'Generator C', progress: 100, status: 'Completed', updatedAt: '2024-08-01' },
          { id: 4, name: 'Generator D', progress: 20, status: 'In Progress', updatedAt: '2024-10-05' },
          { id: 5, name: 'Generator E', progress: 55, status: 'Pending Approval', updatedAt: '2024-09-25' },
          { id: 6, name: 'Generator F', progress: 90, status: 'In Progress', updatedAt: '2024-10-01' },
          { id: 7, name: 'Generator G', progress: 10, status: 'Not Started', updatedAt: '2024-10-15' },
          { id: 8, name: 'Generator H', progress: 85, status: 'In Progress', updatedAt: '2024-09-30' },
          { id: 9, name: 'Generator I', progress: 100, status: 'Completed', updatedAt: '2024-07-15' },
          { id: 10, name: 'Generator J', progress: 30, status: 'In Progress', updatedAt: '2024-10-09' },
        ];
        setGenerators(mockData);
      } catch (error) {
        console.error('Failed to fetch generators:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGeneratorData();
  }, []);

  const generateReport = () => {
    const now = new Date();

    const filteredGenerators = generators.filter((gen) => {
      const updatedAt = new Date(gen.updatedAt); // Convert the string date to a Date object
      const timeDiff = now - updatedAt; // Difference in milliseconds

      switch (timeRange) {
        case 'days':
          return timeDiff <= rangeValue * 24 * 60 * 60 * 1000; // Convert days to milliseconds
        case 'weeks':
          return timeDiff <= rangeValue * 7 * 24 * 60 * 60 * 1000; // Convert weeks to milliseconds
        case 'months':
          return timeDiff <= rangeValue * 30 * 24 * 60 * 60 * 1000; // Convert months to milliseconds (approximate)
        default:
          return true;
      }
    });

    const report = filteredGenerators.map((gen) => ({
      name: gen.name,
      progress: `${gen.progress}%`,
      status: gen.status,
      updatedAt: gen.updatedAt,
    }));

    setReportData(report);
  };

  return (
    <div className="home">
      <h1 className='dash-title'>Welcome to Energy Link</h1>
      <h2>Embedded Generator Progress Tracker</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <div>
            <h2>Generator List</h2>
            <ul>
              {generators.map((gen) => (
                <li key={gen.id}>
                  <h3>{gen.name}</h3>
                  <p>Progress: {gen.progress}%</p>
                  <p>Status: {gen.status}</p>
                  <p>Last Updated: {gen.updatedAt}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Time Range Filter */}
          <div>
            <h3>Generate Report by Time Range</h3>
            <label>
              Select Range Type:
              <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
              </select>
            </label>

            <label>
              Range Value:
              <input 
                type="number" 
                value={rangeValue} 
                onChange={(e) => setRangeValue(Number(e.target.value))} 
                min="1"
              />
            </label>

            <button onClick={generateReport}>Generate Report</button>
          </div>

          {/* Display Generated Report */}
          {reportData && (
            <div>
              <h2>Generated Report</h2>
              {reportData.length > 0 ? (
                <table border="1">
                  <thead>
                    <tr>
                      <th>Generator Name</th>
                      <th>Progress</th>
                      <th>Status</th>
                      <th>Last Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.map((report, index) => (
                      <tr key={index}>
                        <td>{report.name}</td>
                        <td>{report.progress}</td>
                        <td>{report.status}</td>
                        <td>{report.updatedAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No generators found within the specified time range.</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AdminDashboard;

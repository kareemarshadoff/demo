// AdminDetails.js

import React, { useState } from 'react';
import './AdminDetails.css';
import { Link } from 'react-router-dom';

const AdminDetails = () => {
  // Sample admin data
  const admins = [
    { slNo: 1, adminName: 'John Doe', position: 'Admin', details: 'Lorem ipsum' },
    { slNo: 2, adminName: 'Jane Doe', position: 'Manager', details: 'Dolor sit amet' },
    { slNo: 3, adminName: 'Bob Smith', position: 'Supervisor', details: 'Consectetur adipiscing' },
    { slNo: 4, adminName: 'Alice Johnson', position: 'Coordinator', details: 'Elit sed do eiusmod' },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <div>
        <div className={`feedback-container fade-in-up ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="sidebar">
          <p>Sidebar Content</p>
          
          <nav>
            <ul>
              <Link to={"/"}><li className="nav-item">Home</li></Link>
              
              <li className="dropdown">
                <a href="#">Add profile</a>
                <div className="dropdown-content">
            
                <Link to={"/CreateAdminProfile"}><li className="nav-item">Create admin profile</li></Link>  
                <Link to={"/CreateTrainerProfile"}><li className="nav-item">Create trainer profile</li></Link>
                <Link to={"/CreateStudentsProfile"}><li className="nav-item">Create students peofile</li></Link>
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Details</a>
                <div className="dropdown-content">
                <Link to={"/AdminDetails"}><li className="nav-item">Admin Details</li></Link>
                <Link to={"/StudentDetails"}><li className="nav-item">Trainee Details</li></Link>
                <Link to={"/TraineeDetails"}><li className="nav-item">Student Details</li></Link>
                
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Students</a>
                <div className="dropdown-content">
                  <a href="#">Student 1</a>
                  <a href="#">Student 2</a>
                  <a href="#">Student 3</a>
                </div>
              </li>
            </ul>
            <div className="logout">
              <span>Logout</span>
              <span className="logout-symbol">&#x21AA;</span>
            </div>
          </nav>
        </div>
      </div>


      <h2>Admin Details</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Admin Name</th>
            <th>Position</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.slNo}>
              <td>{admin.slNo}</td>
              <td>{admin.adminName}</td>
              <td>{admin.position}</td>
              <td>
                <button onClick={() => alert(`More details for ${admin.adminName}`)}>
                  More Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDetails;

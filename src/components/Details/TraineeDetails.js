// TraineeDetails.js

import React, { useState } from 'react';
import './AdminDetails.css';
import { Link } from 'react-router-dom';

const TraineeDetails = () => {
  // Sample trainee data
  const trainees = [
    { slNo: 1, traineeName: 'John Smith', subject: 'Communication', details: 'Lorem ipsum' },
    { slNo: 2, traineeName: 'Jane Johnson', subject: 'Domain', details: 'Dolor sit amet' },
    { slNo: 3, traineeName: 'Bob Doe', subject: 'Aptitude', details: 'Consectetur adipiscing' },
    { slNo: 4, traineeName: 'Alice Brown', subject: 'Communication', details: 'Elit sed do eiusmod' },
    { slNo: 5, traineeName: 'Chris Wilson', subject: 'Domain', details: 'Tempor incididunt ut labore' },
    { slNo: 6, traineeName: 'Eva Davis', subject: 'Aptitude', details: 'Dolore magna aliqua' },
    { slNo: 7, traineeName: 'Frank Miller', subject: 'Communication', details: 'Ut enim ad minim veniam' },
    { slNo: 8, traineeName: 'Grace Taylor', subject: 'Domain', details: 'Quis nostrud exercitation' },
    { slNo: 9, traineeName: 'Harry Jones', subject: 'Aptitude', details: 'Sunt in culpa qui officia' },
    { slNo: 10, traineeName: 'Ivy Clark', subject: 'Communication', details: 'Excepteur sint occaecat cupidatat' },
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


      <h2>Trainee Details</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Trainee Name</th>
            <th>Subject</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((trainee) => (
            <tr key={trainee.slNo}>
              <td>{trainee.slNo}</td>
              <td>{trainee.traineeName}</td>
              <td>{trainee.subject}</td>
              <td>
                <button onClick={() => alert(`More details for ${trainee.traineeName}`)}>
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

export default TraineeDetails;

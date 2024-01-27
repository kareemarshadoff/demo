import React, { useState } from 'react';
import './admin.css';
import { Link } from 'react-router-dom';


const Admin = () => {
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
            </ul>
            <div className="logout">
              <span>Logout</span>
              <span className="logout-symbol">&#x21AA;</span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Admin;

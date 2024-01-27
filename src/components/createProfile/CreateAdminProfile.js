// CreateAdminProfile.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../createProfile/CreateAdminProfile.css';

const CreateAdminProfile = () => {

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
      <h2>Create Admin Profile</h2>
      <form className="profile-form">
        <div className="form-group">
          <label>Profile Picture:</label>
          <input type="file" name="profilePicture"  />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Nationality:</label>
          <input type="text" name="nationality" required />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" required />
        </div>
        <div className="form-group">
          <label>Work Position:</label>
          <input type="text" name="workPosition" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateAdminProfile;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Admin from "./components/admin";

import CreateAdminProfile from "./components/createProfile/CreateAdminProfile";
import CreateTrainerProfile from "./components/createProfile/CreateTrainerProfile";
import CreateStudentsProfile from "./components/createProfile/reateStudentsProfile";
import AdminDetails from "./components/Details/AdminDetails";
import StudentDetails from "./components/Details/StudentDetails";
import TraineeDetails from "./components/Details/TraineeDetails";
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Details from './components/Details/details';
import MyCalendar from './components/Details/demo';


function App() {
  return (
    <BrowserRouter>
<Routes>
  
  <Route path="/" element={[<Admin/>]}></Route>
  <Route path="/CreateAdminProfile" element={[<CreateAdminProfile/>]}></Route>
  <Route path="/CreateTrainerProfile" element={[<CreateTrainerProfile/>]}></Route>
  <Route path="/CreateStudentsProfile" element={[<CreateStudentsProfile/>]}></Route>
  <Route path="/AdminDetails" element={[<AdminDetails/>]}></Route>
  <Route path="/StudentDetails" element={[<StudentDetails/>]}></Route>
  <Route path="/TraineeDetails" element={[<TraineeDetails/>]}></Route>
  <Route path="/Details" element={[<Details/>]}></Route>
  
</Routes>
</BrowserRouter>

    
  );
}

export default App;

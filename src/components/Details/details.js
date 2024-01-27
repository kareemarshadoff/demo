// Details.jsx

import React, { useState } from 'react';
import './details.css'; // Import the external CSS file for styles
import './calender.css'
import Calendar from 'react-calendar';
import moment from 'moment';
import { motion } from 'framer-motion';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Details = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [student, setStudent] = useState({
    name: 'John Doe',
    rollNumber: '123',
    email: 'john.doe@example.com',
    mobile: '123-456-7890',
    location: 'City, Country',
    AttentencePercentage: '93%',
    linkedin: 'linkedin.com/in/johndoe',
    education: 'Bachelor of Science',
    course: 'Computer Science',
    batch: '2023',
  });

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    const taskName = prompt('Enter task name:');
    if (taskName) {
      const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
      setTasks((prevTasks) => ({
        ...prevTasks,
        [formattedDate]: [...(prevTasks[formattedDate] || []), taskName],
      }));
    }
  };

  const handleRemoveTask = (index) => {
    const formattedDate = getFormattedDate(selectedDate);
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks[formattedDate]];
      updatedTasks.splice(index, 1);
      return {
        ...prevTasks,
        [formattedDate]: updatedTasks,
      };
    });
  };

  const getFormattedDate = (date) => moment(date).format('YYYY-MM-DD');

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = getFormattedDate(date);
      const taskCount = tasks[formattedDate] ? tasks[formattedDate].length : 0;

      if (taskCount > 0) {
        return (
          <div className="task-count ms-1">
            <p>{taskCount}</p>
          </div>
        );
      }
    }
    return null;
  };

  const Calendartile = ({ date }) => {
    const formattedDate = getFormattedDate(date);
    return tasks[formattedDate] && tasks[formattedDate].length > 0
      ? 'has-tasks'
      : 'hasNoTasks';
  };

  return (
    <div>
      <h1 className="title text-center">Student Information System</h1>
    <div className="details-containerx d-flex">
      
      <div className="m-5 detail-content">
        
        <div className="details-card">
          
          <ul className="list m-3">
          <li className="list-item">
              <strong>Name:</strong> {student.name}
            </li>
            <li className="list-item">
              <strong>Roll Number:</strong> {student.rollNumber}
            </li>
            <li className="list-item">
              <strong>Email:</strong> {student.email}
            </li>
            <li className="list-item">
              <strong>Mobile Number:</strong> {student.mobile}
            </li>
            <li className="list-item">
              <strong>Location:</strong> {student.location}
            </li>
            <li className="list-item">
              <strong>Attentence Percentage:</strong> {student.AttentencePercentage}
            </li>
            <li className="list-item">
              <strong>LinkedIn:</strong> {student.linkedin}
            </li>
            <li className="list-item">
              <strong>Education:</strong> {student.education}
            </li>
            <li className="list-item">
              <strong>Course:</strong> {student.course}
            </li>
            <li className="list-item">
              <strong>Batch:</strong> {student.batch}
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="contaiiiner d-flex"
        >
          <div className="d-flex calendar col-lg-6  ">
            <Calendar
              value={selectedDate}
              onChange={handleDateClick}
              tileContent={tileContent}
              tileClassName={Calendartile}
              className="calendar d-block"
            />
          </div>
          <div className="task-container">
            <motion.h2
              className='task-select'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Selected Date: {moment(selectedDate).format('MMMM Do, YYYY')}
            </motion.h2>
            <motion.button
              className="task-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddTask}
            >
              Add Task
            </motion.button>
            <div>
              <motion.h3
                className='task-to-do'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                TO DO:
              </motion.h3>
              {tasks[getFormattedDate(selectedDate)] && (
                <ul>
                  {tasks[getFormattedDate(selectedDate)].map((task, index) => (
                    <div className='d-flex' key={index}>
                      <div className='col-lg-6'>
                        <motion.h6
                          className='task-tasks containerx'
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {task}
                          <hr/>
                        </motion.h6>
                      </div>
                      <div>
                        <button className='task-remove' onClick={() => handleRemoveTask(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Details;

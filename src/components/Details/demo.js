import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
// import './calander.css';
import Calendar from 'react-calendar';
import moment from 'moment';
import { motion } from 'framer-motion';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState({});

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
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contaiiiner d-flex"
      >
        <div className="d-flex calendar col-lg-6 me-5">
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
  );
};

export default MyCalendar;

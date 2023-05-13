import React from 'react';
import './workoutform.css'; // Import the CSS file for the component

const WorkoutPlan = ({ plan }) => {
  return (
    <div className="workout-plan-container">
      <h2 className="workout-plan-title">Workout Plan</h2>
      <p className="workout-plan-text">{plan}</p>
    </div>
  );
};

export default WorkoutPlan;


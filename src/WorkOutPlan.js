import React from 'react';

const WorkoutPlan = ({ plan }) => {
  return (
    <div className="workout-plan-container">
      <h2 className="workout-plan-title">Your Tailored Workout Plan</h2>
      <div className="workout-card">
      {plan}
          </div>
      
    </div>
  );
};

export default WorkoutPlan;

import React from 'react';

const WorkoutPlan = ({ plan }) => {
  return (
    <div className="workout-plan-container">
      <h2 className="workout-plan-title">Workout Plan</h2>
      {plan.map((section, index) => (
        <div key={index} className="workout-card">
          <h3>{section.day}</h3>
          <ul className="exercise-list">
            {Array.isArray(section.exercises) ? (
              section.exercises.map((exercise, i) => (
                <li key={i}>{exercise}</li>
              ))
            ) : (
              <li>{section.exercises}</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;

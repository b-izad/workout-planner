import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import './workoutform.css';

;

function App() {
  const [workoutPlan, setWorkoutPlan] = useState(null);

  return (
    <div className="App">
      <h1>Workout Plan Generator</h1>
      <WorkoutForm setWorkoutPlan={setWorkoutPlan} />
    
    </div>
  );
}

export default App;

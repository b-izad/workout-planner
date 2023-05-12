import React, { useState } from 'react';
import axios from 'axios';
const WorkoutForm = ({ setWorkoutPlan }) => {
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [activities, setActivities] = useState('');
    const [workoutTime, setWorkoutTime] = useState('');
    const [goals, setGoals] = useState('');
    const [equipment, setEquipment] = useState('');
    const [workoutFrequency, setWorkoutFrequency] = useState('');
    const [fitnessLevel, setFitnessLevel] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const requestBody = {
        age,
        sex,
        activities,
        workoutTime,
        goals,
        equipment,
        workoutFrequency,
        fitnessLevel,
      };
  
      try {
        const response = await axios.post('YOUR_SERVERLESS_FUNCTION_URL', requestBody);
        setWorkoutPlan(response.data);
      } catch (error) {
        console.error('Error fetching workout plan:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="sex">Sex:</label>
          <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)} required>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="activities">Usual Activities:</label>
          <textarea
            id="activities"
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="workoutTime">Workout Time (in minutes):</label>
          <input
            type="number"
            id="workoutTime"
            value={workoutTime}
            onChange={(e) => setWorkoutTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="goals">Goals:</label>
          <select id="goals" value={goals} onChange={(e) => setGoals(e.target.value)} required>
            <option value="">Select...</option>
            <option value="weightLoss">Weight Loss</option>
            <option value="muscleGain">Muscle Gain</option>
            <option value="increasedEndurance">Increased Endurance</option>
            <option value="improvedFlexibility">Improved Flexibility</option>
          </select>
        </div>
        <div>
          <label htmlFor="equipment">Equipment Availability:</label>
          <select id="equipment" value={equipment} onChange={(e) => setEquipment(e.target.value)} required>
            <option value="">Select...</option>
            <option value="bodyweight">Bodyweight Exercises Only</option>
            <option value="dumbbells">Dumbbells</option>
            <option value="resistanceBands">Resistance Bands</option>
            <option value="treadmill">Treadmill</option>
            <option value="other">Other Equipment</option>
          </select>
        </div>
        <button type="submit">Get Workout Plan</button>

        </form>)}
  
  export default WorkoutForm;
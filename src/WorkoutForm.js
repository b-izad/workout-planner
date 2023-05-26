import React, { useState } from 'react';
import axios from 'axios';
import WorkoutPlan from './WorkOutPlan';
import { RingLoader } from 'react-spinners';

const WorkoutForm = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goals, setGoals] = useState('');
  const [days, setDays] = useState('');
  const [equipment, setEquipment] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState('');
  const [planReady, setPlanReady] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requestBody = {
      prompt: `I am a ${sex}, ${age} years old. My weight is ${weight} cm and my height is ${height} kilograms, goals: ${goals}, equipment: ${equipment}, I am willing to workout ${days} a week. What's a good workout plan for me? give me the workouts plan (with numbers) and tell me each day do what (divided on the ${days} I can workout) for the best results`,
    };

    try {
      
      const response = await axios.post('http://localhost:5000/getWorkoutPlan', requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const workoutPlanText = response.data;

      setWorkoutPlan(workoutPlanText);
      setLoading(false);
      setPlanReady(true);
    } catch (error) {
      console.error('Error fetching workout plan:', error);
    }
  };



  
    return(
      <div>
        {loading ? (
          <div className="spinner-container">
            <RingLoader color='#05386B' loading={true} size={400} />
           <p className='spinner-container-p'> Hang tight while we are preparing the best plan for you...</p>
          </div>
        ) : planReady ? (
          <WorkoutPlan plan={workoutPlan} />
        ) : (
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
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
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
          <label htmlFor="Days">How many days a week are you able to workout:</label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
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
        <button className = 'button' type="submit">Get Workout Plan</button>

        </form>
      )}
        </div>)}
  
  export default WorkoutForm;
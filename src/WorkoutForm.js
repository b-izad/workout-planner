import React, { useState } from 'react';
import axios from 'axios';
import WorkoutPlan from './WorkOutPlan';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      model: 'text-davinci-003',
      prompt: `I am a ${sex}, ${age} years old. My weight is ${weight} cm and my height is ${height} kilograms,  goals: ${goals}, equipment: ${equipment}, I am willing to workout ${days} a week. What's a good workout plan for me? give me the workouts plan (with numbers) and tell me each day do what (devided oin the ${days} I can workout) for the best results`,
      max_tokens: 500,
      temperature: 0.5,
    };

    try {
      const response = await axios.post('https://api.openai.com/v1/completions', requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
        },
      });
      const workoutPlanText = response.data.choices[0].text;
      console.log('workoutPlanText:', workoutPlanText); // Log the workout plan text
      
      const workoutPlanArray = workoutPlanText.split(/\n{2,}/);

      console.log('workoutPlanArray:', workoutPlanArray); // Log the split workout plan array
      
      const formattedWorkoutPlan = workoutPlanArray.slice(1).map((plan) => {
        const [day, exercises] = plan.split(':');
        return { day, exercises };
      });
      
      setWorkoutPlan(formattedWorkoutPlan);
      console.log(formattedWorkoutPlan)
      setPlanReady(true);
    } catch (error) {
      console.error('Error fetching workout plan:', error);
    }
  };
  
    return (
        <div>
           
      {planReady ? (
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
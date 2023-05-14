import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import WorkoutForm from './WorkoutForm';
import './workoutform.css';
import ContactUs from './Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout-form" element={<WorkoutForm />} />
          <Route path="/contact" element={<ContactUs />} />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

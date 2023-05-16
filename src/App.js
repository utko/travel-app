import React, { useState } from 'react';
import TravelForm from './TravelForm';
import { Button } from '@material-ui/core';
import { getTravelIdeas } from './api';

function App() {
  const [formData, setFormData] = useState(null);
  const [travelIdeas, setTravelIdeas] = useState(null);

  const handleFormSubmit = async (data) => {
    setFormData(data);
    const ideas = await getTravelIdeas(data);
    setTravelIdeas(ideas);
  };

  const handleRestart = () => {
    setFormData(null);
    setTravelIdeas(null);
  };

  return (
    <div>
      {!formData ? (
        <TravelForm onSubmit={handleFormSubmit} />
      ) : (
        <div>
          <h2>Travel Ideas</h2>
          <p>{travelIdeas}</p>
          <Button onClick={handleRestart}>Start Again</Button>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import InfoCards from '../components/InfoCard';
import Schedule from '../components/Schedule';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [setData] = useState([]);

  const handleDateChange = (date) => {
    setCurrentDate(date); 
  };
  return (
    <div>
      <Navbar onDateChange={handleDateChange} currentDate={currentDate} setData={setData} />
      <InfoCards/>
      <Schedule currentDate={currentDate} onDateChange={handleDateChange} />
    </div>
  );
}

export default App;

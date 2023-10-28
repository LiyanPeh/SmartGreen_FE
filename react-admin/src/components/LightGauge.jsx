import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import {Box, Typography} from '@mui/material';

// Import the sun CSS
import './sun.css';

const CircularGaugeContainer = styled('div')({
  width: '40%', // Responsive width
  // paddingTop: '40%', // Maintain aspect ratio (1:1 for a circle)
  position: 'relative',
  borderRadius: '50%', // Remove the default border
  display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  flexDirection: 'column',
});

const PPDFValue = styled(Typography)({
  // fontSize: '15px',
  // Use CSS properties to adjust the position of the text
  position: 'absolute',
  top: '20%', // Adjust this value to shift the text vertically
  // left: '-240%', // Center the text horizontally
  transform: 'translate(-50%, -50%)', // Center the text vertically and horizontally
  color: 'white'
});

const LightingText = styled(Typography)({
  // fontSize: '15px',
  position: 'absolute',
  top: '-60%', // Adjust this value to position the text vertically
  // left: '-310%',
  transform: 'translateX(-50%)',
  color: 'white',
});

const getRandomLuxValue = () => {
  // Generate a random lux value (mock data)
  return Math.random() * 10000; // Modify this range as needed
};

const convertLuxToPPDF = (lux) => {
  // Convert lux to PPDF using a conversion factor (simplified example)
  // The conversion factor depends on the light source and plant type
  const conversionFactor = 0.018; // This is a simplified value, you should use an appropriate factor
  return (lux * conversionFactor).toFixed(2); // Round to 2 decimal places
};

const CircularGauge = () => {
  const [lux, setLux] = useState(getRandomLuxValue()); // Initial mock lux data

  // Simulate lux changes
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newLux = getRandomLuxValue();
      setLux(newLux);
    }, 5000); // Update lux every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const ppdf = convertLuxToPPDF(lux);

  return (
    <div>
      <CircularGaugeContainer>
        <Typography variant="h5" fontWeight="600">
          Lighting
        </Typography>
        <Typography variant="h6" fontWeight="600" >
          {ppdf} μmol/m²/s
        </Typography>
        
      </CircularGaugeContainer>
      {/* Include the animated sun here */}
      {/* <div className="sun"></div> */}
      <Box 
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={'25px'}
        // style={{ position: 'absolute', top: '50%', left: '50%' , transform: 'translate(50%, 50%)' }}
        >
        <div className="sun"></div>
      </Box>
      
    </div>
  );
};

export default CircularGauge;
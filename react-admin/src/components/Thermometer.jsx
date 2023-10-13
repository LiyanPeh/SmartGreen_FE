import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Alert from '@mui/material/Alert';

const ThermometerRoot = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
}));

const TemperatureText = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const Thermometer = () => {
  const [temperature, setTemperature] = useState(25); // Initial temperature (mock data)

  // Simulate temperature changes
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update temperature with mock data (replace this with actual data source)
      const newTemperature = Math.random() * 30 + 10; // Random temperature between 10 and 40
      setTemperature(newTemperature);
    }, 5000); // Update temperature every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  let alertType = 'info'; // Default alert type

  if (temperature >= 0 && temperature <= 23) {
    alertType = 'error'; // "Not optimal" range
  } else if (temperature > 23 && temperature <= 29) {
    alertType = 'success'; // "Optimal" range
  } else if (temperature > 29 && temperature <= 40) {
    alertType = 'error'; // "Not optimal" range
  }

  return (
<ThermometerRoot>
  <Typography variant="h6" gutterBottom>
    Temperature
  </Typography>
  <TemperatureText>
    <Typography variant="body1" color="textSecondary">
      0°C
    </Typography>
    <Typography variant="body1" color="textSecondary">
      40°C
    </Typography>
  </TemperatureText>
  <LinearProgress
    variant="determinate"
    value={(temperature / 40) * 100} // Assuming the thermometer scale is from 0°C to 40°C
    color="secondary"
    sx={{ height: '16px'}} // Adjust the height to increase the thickness
    style={{ borderRadius: '8px' }} // Apply a style for border radius
  />
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <Typography variant="body1" color="textSecondary">
      {temperature.toFixed(1)}°C
    </Typography>
    <Alert
      severity={alertType}
      sx={{
        marginTop: '0px',
        fontSize: '16px', // Set a consistent font size
        width: '30%', // Set a consistent width
        lineHeight: '-5', // Reduce the line height
        padding: '0px', // Reduce the padding to control the height
        backgroundColor: 'transparent', // Remove the background
      }}
    >
      {alertType === 'error' && 'Not optimal'}
      {alertType === 'success' && 'Optimal'}
    </Alert>

  </div>
</ThermometerRoot>
  );
};

export default Thermometer;

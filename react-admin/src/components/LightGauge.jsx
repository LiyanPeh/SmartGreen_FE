import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import SunIcon from '@mui/icons-material/WbSunny';

const CircularGaugeContainer = styled('div')({
  width: '40%', // Responsive width
  paddingTop: '40%', // Maintain aspect ratio (1:1 for a circle)
  position: 'relative',
  border: '1px solid #ccc',
  borderRadius: '50%',
});

const ContentCenter = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const CircularGauge = () => {
  const [lighting, setLighting] = useState(50); // Initial lighting (mock data)

  // Simulate lighting changes
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update lighting with mock data (replace this with actual data source)
      const newLighting = Math.random() * 100;
      setLighting(newLighting);
    }, 5000); // Update lighting every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <CircularGaugeContainer>
      <ContentCenter>
        <Typography variant="h6" fontSize="14px">
          Lighting
        </Typography>
        <SunIcon style={{ fontSize: '24px', color: '#FFD700' }} />
        <Typography variant="body2" color="textSecondary" fontSize="12px">
          {lighting.toFixed(1)}%
        </Typography>
      </ContentCenter>
    </CircularGaugeContainer>
  );
};

export default CircularGauge;

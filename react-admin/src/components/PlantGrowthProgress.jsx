import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PlantGrowthProgress = ({ size, color }) => {
  const totalDays = 50; // Total number of days for plant growth
  const [daysRemaining, setDaysRemaining] = useState(totalDays);

  useEffect(() => {
    const timer = setInterval(() => {
      if (daysRemaining > 0) {
        setDaysRemaining(daysRemaining - 1);
      }
    }, 1000); // Update every 1000ms (1 second)

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, [daysRemaining]);

  const calculateProgressValue = (daysRemaining) => {
    return 100 - (daysRemaining / totalDays) * 100;
  };

  const progressValue = calculateProgressValue(daysRemaining);

  return (
    <div style={{ position: 'relative'}}>
      <CircularProgress
        variant="determinate"
        value={progressValue}
        size={size}
        thickness={5}
        style={{ color: 'lightgreen' }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" color="textPrimary">
          {`${daysRemaining} days left to harvest`}
        </Typography>
      </Box>
    </div>
  );
};

PlantGrowthProgress.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default PlantGrowthProgress;

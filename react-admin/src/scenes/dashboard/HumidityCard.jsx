import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Container, Alert, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import './dashboard.css';

const Item = styled(Paper)(({ theme, customBackgroundColor }) => ({
  backgroundColor: customBackgroundColor || (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#fff',
  width: 30,
}));

const Triangle = () => {
    // -----------Isn't working (producing a weird extra white upside down triangle) ------------
    // const triangleStyle = {
    //     width: 0,
    //     height: 0,
    //     backgroundColor: "transparent",
    //     borderStyle: "solid",
    //     borderLeftWidth: 10,
    //     borderRightWidth: 10,
    //     borderBottomWidth: 15,
    //     borderLeftColor: "transparent",
    //     borderRightColor: "transparent",
    //     borderBottomColor: "red",
    // };
  
    return (
    //   <div style={triangleStyle}>
        <div className='triangle'>
            {" "}
            {/* Add a space to ensure the triangle shape is rendered */}
        </div>
    );
  };

const HumidityCard = ({ currentHumidity, optimalHumidityRange }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const [comment, setComment] = useState('');
    

    // useEffect(() => {
    //     // Determine the comment based on the currentPH and optimalRange
    //     if (currentHumidity >= optimalHumidityRange[0] && currentHumidity <= optimalHumidityRange[1]) {
    //     setComment('Optimal');
    //     } else if (currentHumidity < optimalHumidityRange[0]) {
    //     setComment('Too low');
    //     } else {
    //     setComment('Too high');
    //     }
    //     const waterLevel = (currentHumidity / 30) * 100;
    //     const waterWave = document.querySelector('.water_wave');
    //     waterWave.style.setProperty('--water-level', `${waterLevel}`);
    // }, [currentHumidity, optimalHumidityRange]);

    const [humidityLevel, setHumidityLevel] = useState(15); // Initial value (mock data)

    
    // Simulate pH changes
    useEffect(() => {
        
    const waterLevel = (humidityLevel / 30) * 100;
    const waterWave = document.querySelector('.water_wave');
    waterWave.style.setProperty('--water-level', `${waterLevel}`);
    
    const intervalId = setInterval(() => {
        // Update temperature with mock data (replace this with actual data source)
        const newHumidity = Math.random() * 10 + 10; // Random temperature between 10 and 20
        setHumidityLevel(newHumidity.toFixed(1));
        const waterLevel = (newHumidity / 30) * 100;
        const waterWave = document.querySelector('.water_wave');
        waterWave.style.setProperty('--water-level', `${waterLevel}`);
    }, 5000); // Update pH every 5 seconds

    return () => clearInterval(intervalId);
    }, []);

    let alertType = 'info'; // Default alert type

    if (humidityLevel >= 0 && humidityLevel <= 11) {
    alertType = 'error'; // "Not optimal" range
    } else if (humidityLevel > 11 && humidityLevel <= 16) {
    alertType = 'success'; // "Optimal" range
    } else if (humidityLevel > 16) {
    alertType = 'error'; // "Not optimal" range
    }


    return (
        <Box
            gridColumn="span 3"
            // gridRow="span 2"
            display="flex"
            backgroundColor={theme.palette.mode === 'dark' ? colors.primary[400] : colors.grey[900]}
            padding="20px"
            minWidth={250}
            alignItems="flex-start"
            justifyContent="space-between"
        >
            <Grid>
                <Typography
                variant="h5"
                fontWeight="600"
                // sx={{ marginBottom: "15px" }}
                >
                    Humidity
                </Typography>
                <Typography
                variant="h6"
                fontWeight="600"
                // sx={{ marginBottom: "15px" }}
                >
                    {humidityLevel} g/m3
                </Typography>
                <Grid
                container
                justifyContent="center"
                alignItems="center">
                    <Alert
                    severity={alertType}
                    sx={{
                        marginTop: '0px',
                        fontSize: '16px', // Set a consistent font size
                        width: '120px', // Set a consistent width
                        lineHeight: '-5', // Reduce the line height
                        padding: '0px', // Reduce the padding to control the height
                        backgroundColor: 'transparent', // Remove the background
                    }}
                    >
                    {alertType === 'error' && 'Not optimal'}
                    {alertType === 'success' && 'Optimal'}
                    </Alert>
                </Grid>
            </Grid>
            <Grid>
                <Box width={100}>
                    <div className="water_wave"></div>
                </Box>
            </Grid>
            
            
            
            
            
        </Box>
        
    );
};

export default HumidityCard;
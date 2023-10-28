import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Container, Button, Typography, useTheme } from "@mui/material";
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
    const [comment, setComment] = useState('');
    

    useEffect(() => {
        // Determine the comment based on the currentPH and optimalRange
        if (currentHumidity >= optimalHumidityRange[0] && currentHumidity <= optimalHumidityRange[1]) {
        setComment('Optimal');
        } else if (currentHumidity < optimalHumidityRange[0]) {
        setComment('Too low');
        } else {
        setComment('Too high');
        }
        const waterLevel = (currentHumidity / 30) * 100;
        const waterWave = document.querySelector('.water_wave');
        waterWave.style.setProperty('--water-level', `${waterLevel}`);
    }, [currentHumidity, optimalHumidityRange]);


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
                    {currentHumidity} g/m3
                </Typography>
                <Typography variant="body1"
                fontWeight="600"
                >
                    {comment}
                </Typography>
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
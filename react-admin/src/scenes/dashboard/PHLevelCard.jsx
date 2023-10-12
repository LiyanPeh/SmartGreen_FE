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

const PHLevelCard = ({ currentPH, optimalRange }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [comment, setComment] = useState('');

    useEffect(() => {
        // Determine the comment based on the currentPH and optimalRange
        if (currentPH >= optimalRange[0] && currentPH <= optimalRange[1]) {
        setComment('Optimal');
        } else if (currentPH < optimalRange[0]) {
        setComment('Too low');
        } else {
        setComment('Too high');
        }
    }, [currentPH, optimalRange]);

    // Calculate the left position based on the currentPH value
    const triangleLeft = `${((currentPH - 1) / 11) * 100}%`;

    return (
        <Box
            gridColumn="span 3"
            // gridRow="span 2"
            backgroundColor={theme.palette.mode === 'dark' ? colors.primary[400] : colors.grey[900]}
            padding="20px"
            minWidth={400}
        >
            <Typography
            variant="h5"
            fontWeight="600"
            // sx={{ marginBottom: "15px" }}
            >
            pH Levels
            </Typography>
            <Grid><div className="comment">{comment}</div></Grid>
            <Grid 
            container spacing={0.5}
            flexWrap= 'nowrap'>
            <Grid>
                <Item customBackgroundColor="#ff3030">1</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#FF8700">2</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#dbb500">3</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#aec41f">4</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#90db18">5</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#0bd454">6</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#0ad2ff">7</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#147DF5">8</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#580AFF">9</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#BE0AFF">10</Item>
            </Grid>
            <Grid>
                <Item customBackgroundColor="#890ca6">11+</Item>
            </Grid>
            </Grid>
            <Grid >
                {/* <Triangle style={{ left: triangleLeft }}></Triangle> */}
                <div className='triangle' style={{ left: triangleLeft }}></div>
                
            </Grid>
            <Grid>
                <div className="current-ph" style={{ left: `calc(${(currentPH - 1) / 11 * 100 + 1}%)` }}>{currentPH}</div>
            </Grid>
            
            
        </Box>
        
    );
};

export default PHLevelCard;
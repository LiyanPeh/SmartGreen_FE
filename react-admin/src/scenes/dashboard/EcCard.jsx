import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Container, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import './dashboard.css';
import Alert from '@mui/material/Alert';

const Item = styled(Paper)(({ theme, customBackgroundColor }) => ({
  backgroundColor: customBackgroundColor || (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#fff',
  width: 33,
}));

const EcCard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [ecValue, setEcValue] = useState(2); // Initial value (mock data)

    const triangleLeft = `${((ecValue) / 6) * 100}%`;

    // Simulate pH changes
    useEffect(() => {
    const intervalId = setInterval(() => {
        // Update temperature with mock data (replace this with actual data source)
        const newEc = Math.random() * 6; // Random temperature between 0 and 5
        setEcValue(newEc.toFixed(1));
    }, 5000); // Update pH every 5 seconds

    return () => clearInterval(intervalId);
    }, []);

    let alertType = 'info'; // Default alert type

    if (ecValue < 1.5) {
    alertType = 'error'; // "Not optimal" range
    } else if (ecValue > 1.5 && ecValue <= 2.5) {
    alertType = 'success'; // "Optimal" range
    } else if (ecValue > 2.5) {
    alertType = 'error'; // "Not optimal" range
    }

    // Calculate the left position based on the currentPH value
    

    return (
        <Box
            gridColumn="span 3"
            gridRow="span 1"
            backgroundColor={theme.palette.mode === 'dark' ? colors.primary[400] : colors.grey[900]}
            padding="20px"
            minWidth={250}
        >
            <Typography
            variant="h5"
            fontWeight="600"
            // sx={{ marginBottom: "15px" }}
            >
            EC Level (mS/cm2)
            </Typography>
            {/* <Grid><div className="comment">{comment}</div></Grid> */}
            <Box 
                display={'flex'}
                justifyContent={'center'}
            >
                <Box 
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                >
                    <Grid 
                        container spacing={0.3}
                        position={'relative'}
                        display={'flex'}
                        // justifyContent={'center'}
                        flexWrap= 'nowrap'
                        width={210}
                    >
                        <Grid>
                            <Item customBackgroundColor="#90db18">0</Item>
                        </Grid>
                        <Grid>
                            <Item customBackgroundColor="#0bd454">1</Item>
                        </Grid>
                        <Grid>
                            <Item customBackgroundColor="#90db18">2</Item>
                        </Grid>
                        <Grid>
                            <Item customBackgroundColor="#dbb500">3</Item>
                        </Grid>
                        <Grid>
                            <Item customBackgroundColor="#FF8700">4</Item>
                        </Grid>
                        <Grid>
                            <Item customBackgroundColor="#ff3030">5</Item>
                        </Grid>

                    </Grid>
                    
                    <Grid >
                        <div className='triangle' style={{ left:  `calc(${triangleLeft} - 7px)`}}></div>
                    </Grid>
                    <Grid>
                        <div className="current-value" style={{ left: `calc(${triangleLeft} - 14px)`, display: 'flex', justifyContent: 'center'}}>{ecValue}</div>
                    </Grid>
                    </Box>
            </Box>
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
            
            
        </Box>
        
    );
};

export default EcCard;
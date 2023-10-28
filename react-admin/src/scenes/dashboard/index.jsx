import { Box, Container, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
import LightModeIcon from '@mui/icons-material/LightMode';
import Battery3BarIcon from '@mui/icons-material/Battery3Bar';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import Thermometer from '../../components/Thermometer';
import LightGauge from "../../components/LightGauge";
import PlantGrowthProgress from '../../components/PlantGrowthProgress';
import PHLevelCard from './PHLevelCard';
import HumidityCard from "./HumidityCard";
import CustomCard from '../../components/Card.jsx';

const Item = styled(Paper)(({ theme, customBackgroundColor }) => ({
  backgroundColor: customBackgroundColor || (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#fff',
  width: 30,
}));

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const currentPH = 7; // Example current pH value
  const optimalRange = [6, 8]; // Example optimal pH range
  const currentHumidity = 15; // Example current Humidity value
  const optimalHumidityRange = [11, 16]; // Example optimal Humidity range

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          // alignItems="center"
          // justifyContent="center"
          padding="20px"
          minWidth={400}
        >

        <Thermometer />

        </Box>
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="10 g/m3"
            subtitle="Humidity"
            progress="0.50"
            increase="+21%"
            icon={
              <ModeFanOffIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}
        <HumidityCard currentHumidity={currentHumidity} optimalHumidityRange={optimalHumidityRange} />
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="6000 Lux"
            subtitle="Lighting"
            progress="0.30"
            increase="+5%"
            icon={
              <LightModeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <PHLevelCard currentPH={currentPH} optimalRange={optimalRange} />

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          // alignItems="center"
          padding="20px"
        >
          <Box
          display="flex"
          flexDirection="column">
            <Typography variant="h5" fontWeight="600">
                          Plant Growth Progress
            </Typography>
            <Box p="15px">
              <PlantGrowthProgress size="200px" value={50} color="primary" />
            </Box>
          </Box>
          

          <Box 
          p="30px" marginTop="0px" display="flex" alignItems="center">
            <CustomCard />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="20px"
          minWidth={400}
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
        >
          <LightGauge />
        </Box>
      

        {/* ROW 3 */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <CustomCard />
          </Box>
        </Box> */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box> */}
        
      </Box>
    </Box>
  );
};

export default Dashboard;

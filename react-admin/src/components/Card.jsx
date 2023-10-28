import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function CustomCard() {
  const crop = 'Bakchoy';
  const conditions = 'Great';
  const phase = 'Filling';
  const sowDate = '24 Oct';

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Crop: {crop}
        </Typography>
        <Divider />
        <Typography variant="h5" component="div">
          Conditions: {conditions}
        </Typography>
        <Divider />
        <Typography variant="h5" component="div">
          Phase: {phase}
        </Typography>
        <Divider />
        <Typography variant="h5" component="div">
          Sow Date: {sowDate}
        </Typography>
      </CardContent>
    </Card>
  );
}

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function InfoCard({ title, value }) {
  return (
    <div style={{ width: '100%', maxWidth: '300px', margin: '0 8px' }}>
      <Card variant="outlined" style={{ borderRadius: '8px', backgroundColor: 'white' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', padding: '8px' }}>
          <Typography component="h5">
            {title}
          </Typography>
          <Typography variant="h4" component="p">
            {value}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoCards() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#f0f0f0', padding: '16px', borderRadius: '8px', overflowX: 'auto' }}>
      <InfoCard title="Total" value="100" />
      <InfoCard title="Pendentes" value="30" />
      <InfoCard title="Veículos Presentes" value="50" />
      <InfoCard title="Em Descarga" value="20" />
      <InfoCard title="Concluídos" value="40" />
      <InfoCard title="Não Realizados" value="10" />
    </div>
  );
}

export default InfoCards;

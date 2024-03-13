import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import BallotIcon from '@mui/icons-material/Ballot';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AddAppointmentModal from './AppointmentModal';
import AddIcon from '@mui/icons-material/Add';

function Navbar({ onDateChange, currentDate, setData }) {
    const handleDateChange = () => {
        onDateChange(new Date());
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveAppointment = (newAppointment) => {
        newAppointment.startDate = new Date(newAppointment.startDate.getFullYear(), newAppointment.startDate.getMonth() - 1, newAppointment.startDate.getDate());
        newAppointment.endDate = new Date(newAppointment.endDate.getFullYear(), newAppointment.endDate.getMonth() - 1, newAppointment.endDate.getDate());
        setData(prevData => [...prevData, { id: prevData.length, ...newAppointment }]);
    };

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit">
                            Painel de Recebimento
                        </Link>
                        <Link underline="hover" color="inherit">
                            Local: Centro de Distribuição
                        </Link>
                        <Typography color="text.primary">Dia: {currentDate.toLocaleDateString('pt-BR')}</Typography>
                    </Breadcrumbs>
                    <div style={{ marginLeft: 'auto' }}>
                        <IconButton >
                            <ViewListIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <BallotIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={handleDateChange}>
                            <DateRangeIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <StoreIcon />
                        </IconButton>
                        <IconButton onClick={() => setIsModalOpen(true)} color="inherit">
                            <AddIcon />
                        </IconButton>
                        <IconButton color="primary">
                            <SettingsIcon />
                            <Typography variant="body1" color='primary'>Configurações</Typography>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
            <AddAppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveAppointment} />
        </>

    );
}

export default Navbar;

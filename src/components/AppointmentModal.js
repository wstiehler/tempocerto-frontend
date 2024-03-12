import React, { useState } from 'react';
import { Modal, Button, TextField, Box, Select, MenuItem } from '@mui/material';

const AddAppointmentModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [locationId, setLocationId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [selectedDoca, setSelectedDoca] = useState(''); // Estado para armazenar a opção selecionada

  const handleSave = () => {
    if (!title || !locationId || !startDate || !endDate || !companyId || !selectedDoca) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newAppointment = {
      title,
      locationId,
      startDate,
      endDate,
      companyId,
      docaId: selectedDoca, // Usar a opção selecionada para docaId
    };

    console.log(newAppointment);

    onSave(newAppointment);

    setTitle('');
    setLocationId('');
    setStartDate('');
    setEndDate('');
    setCompanyId('');
    setSelectedDoca(''); // Limpar a opção selecionada

    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
        <TextField label="Título" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal" />
        <TextField label="ID da Localização" value={locationId} onChange={(e) => setLocationId(e.target.value)} fullWidth margin="normal" />
        <TextField label="Data de Início" type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} fullWidth margin="normal" />
        <TextField label="Data de Término" type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} fullWidth margin="normal" />
        <Select label="ID da Doca" value={selectedDoca} onChange={(e) => setSelectedDoca(e.target.value)} fullWidth margin="normal">
          <MenuItem value="id1">Doca 1</MenuItem>
          <MenuItem value="id2">Doca 2</MenuItem>
          <MenuItem value="id3">Doca 3</MenuItem>
          <MenuItem value="id4">Doca 4</MenuItem>
        </Select>
        <TextField label="ID da Empresa" value={companyId} onChange={(e) => setCompanyId(e.target.value)} fullWidth margin="normal" />
        <Button variant="contained" onClick={handleSave}>Salvar</Button>
      </Box>
    </Modal>
  );
};

export default AddAppointmentModal;

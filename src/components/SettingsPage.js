import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const SettingsPage = () => {
  const [namespace, setNamespace] = useState('');

  const handleCreateNamespace = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create_namespace', { namespace });
      alert(response.data.text);
    } catch (error) {
      console.error(error);
      alert('Error creating namespace');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <TextField
          fullWidth
          label="Namespace"
          variant="outlined"
          value={namespace}
          onChange={(e) => setNamespace(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleCreateNamespace} fullWidth>
          Create Namespace
        </Button>
      </Box>
    </Container>
  );
};

export default SettingsPage;
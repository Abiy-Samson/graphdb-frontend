import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const DataUploadPage = () => {
  const [file, setFile] = useState(null);
  const [namespace, setNamespace] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('namespace', namespace);
    try {
      const response = await axios.post('http://localhost:5000/upload_ttl', formData);
      alert(response.data.text);
    } catch (error) {
      console.error(error);
      alert('Error uploading TTL file');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Data Upload
        </Typography>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginBottom: '16px' }}
        />
        <TextField
          fullWidth
          label="Namespace"
          variant="outlined"
          value={namespace}
          onChange={(e) => setNamespace(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleUpload} fullWidth>
          Upload TTL
        </Button>
      </Box>
    </Container>
  );
};

export default DataUploadPage;
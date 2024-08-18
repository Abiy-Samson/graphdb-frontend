import React from 'react';
import SettingsPage from './components/SettingsPage';
import DataUploadPage from './components/DataUploadPage';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <SettingsPage />
      <DataUploadPage />
    </div>
  );
}

export default App;
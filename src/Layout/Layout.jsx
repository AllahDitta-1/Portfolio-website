// src/Layout/Layout.jsx

import React from 'react';
import Appbar from '../components/Appbar'; // adjust path if needed
import Footer from '../components/Footer'; // adjust path if needed
import { Box } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Box>
      <Appbar />
      <Box sx={{ minHeight: '80vh', mt: 8 }}>
        {children}
      </Box>

    </Box>
  );
}

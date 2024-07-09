import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      const convertedValue = (parseFloat(value) * 9/5) + 32;
      setFahrenheit(convertedValue.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      const convertedValue = (parseFloat(value) - 32) * 5/9;
      setCelsius(convertedValue.toFixed(2));
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h5" gutterBottom>
        Temperature Converter
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          label="Цельсия"
          value={celsius}
          onChange={handleCelsiusChange}
          variant="outlined"
          type="number"
          style={{ marginRight: '20px' }}
        />
        <TextField
          label="Фаренгейта"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          variant="outlined"
          type="number"
        />
      </Box>
    </Box>
  );
}

export default TemperatureConverter;

import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Message = ({ text }) => {
  return (
    <Typography variant="h1" color="textPrimary">
      {text}
    </Typography>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
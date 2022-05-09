import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import React from 'react';

const Complex = ({ label, ...props }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: "column"
    }}>
      <div style={{
        display: 'flex',
        alignItems: "center"
      }}>
        <span>I agree to terms and condition</span>
        <Checkbox />
      </div>
      <Button size="small" variant="contained">Confirm</Button>
    </div>
  );
};

export default Complex

import Button from '@mui/material/Button';
import OtherImport from '../other';

import React from 'react';

export const MUIButton = ({ label, ...props }) => {
  return (
    <>
      <span>what a life</span>
      <OtherImport></OtherImport>
      <Button {...props}>{label}</Button>
    </>
  );
};

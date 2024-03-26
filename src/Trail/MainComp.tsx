// ParentComponent.tsx
import React, { useState } from 'react';
import { Button } from '@mui/material';
import ModalComponent from './modalComp';

const ParentComponent: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (formData:any) => {
    // Handle form submission logic here
    // console.log(formData);
    setOpen(false); // Close the modal after form submission
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <ModalComponent open={open} onClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
};

export default ParentComponent;

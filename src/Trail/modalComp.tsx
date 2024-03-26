import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import FormComponent from './formComp';

interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  // Define your form data structure here
  name: string;
  age: number;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ open, onClose, onSubmit }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div>
        <h2>Modal</h2>
        <FormComponent onSubmit={onSubmit} />
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default ModalComponent;

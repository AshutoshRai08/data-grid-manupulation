import React, { useState } from 'react';
import { Button } from '@mui/material';

interface FormComponentProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  // Define your form data structure here
  name: string;
  age: number;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', age: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="number" name="age" value={formData.age} onChange={handleChange} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormComponent;

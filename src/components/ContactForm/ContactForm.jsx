import React from 'react';
import { useState } from 'react';
import {
  ButtonAdd,
  Form,
  SearchInput,
  SearchWrapper,
} from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchWrapper>
        {' '}
        Name
        <SearchInput
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </SearchWrapper>
      <SearchWrapper>
        {' '}
        Number
        <SearchInput
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </SearchWrapper>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </Form>
  );
};
export default ContactForm;

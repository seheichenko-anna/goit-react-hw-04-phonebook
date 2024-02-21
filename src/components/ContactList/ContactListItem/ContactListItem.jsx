import React from 'react';
import { ButtonDelete, ContactsItem } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactsItem key={id}>
      {name}: {number}
      <ButtonDelete onClick={() => onDeleteContact(id)}>Delete</ButtonDelete>
    </ContactsItem>
  );
};

export default ContactListItem;

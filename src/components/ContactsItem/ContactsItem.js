import React from 'react';
import { delete_button } from './ContactsItem.module.css';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
const ContactsItem = ({ filtered, onDelete }) => {
  return filtered.map(({ name, number, id }) => {
    return (
      <li key={id} name={name}>
        {name}: {number}
        <button
          type="button"
          className={delete_button}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

const mapDispatchToProps = {
  onDelete: contactsOperations.deleteContact,
};

export default connect(null, mapDispatchToProps)(ContactsItem);

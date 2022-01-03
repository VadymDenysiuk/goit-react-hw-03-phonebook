import { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Text, Button } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Text>{name}</Text>
              <Text>{number}</Text>
              <Button onClick={() => onDeleteContact(id)}>Delete</Button>
            </li>
          );
        })}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
export default ContactList;

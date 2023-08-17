import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contact/operationsCont';
import { selectUserContacts } from 'redux/contact/selectorCont';
import { selectFilters } from 'redux/filter/selectFilt';



const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectUserContacts);
  const filter = useSelector(selectFilters);

  const getFilteredContacts = () => {
    if (!contacts) return [];
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
            style={{ marginLeft: '10px' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contact/operationsCont';
import { selectUserContacts } from 'redux/contact/selectorCont';
import { selectFilters } from 'redux/filter/selectFilt';
import { ULstyled } from './ContactList.styled';



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
    <ULstyled>
      {filteredContacts.map(contact => (
        <li className="Item" key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className="button-13"
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ULstyled>
  );
};

export default ContactList;

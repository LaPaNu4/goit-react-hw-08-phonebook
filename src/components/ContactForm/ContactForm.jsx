import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contact/operationsCont';
import { selectUserContacts } from 'redux/contact/selectorCont';
import { FormBTN } from './ContactForm.styled';


function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectUserContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    if (contacts.some(contact => contact.name === name))
      return toast.error('This contact is already existing');

    dispatch(addContactThunk({ name, number }));
    form.reset()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name:</p>
        <input
          name="contactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          required
        />
      </label>
      <br />
      <label>
        <p>Number:</p>
        <input
          name="contactNumber"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          type="text"
          required
        />
      </label>
      <br />
      <FormBTN type="submit">Add contact</FormBTN>
    </form>
  );
}

export default ContactForm;

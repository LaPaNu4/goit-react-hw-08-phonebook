import ContactForm from 'components/ContactForm/CpntactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';
import {
  requestContactsThunk,
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contactsReducer';

const ContactsPage = () => {
  const authentificated = useSelector(selectAuthentificated);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return ;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

   if (!authentificated) return <Navigate to="/contacts" />;
  return (
    <section>
      <ContactForm/>
      <Filter/>

      {isLoading && <h2>Loading...</h2>}
      {error && <p>Oops, some error occured... {error}</p>}
      <ContactList/>
    </section>
  );
};
export default ContactsPage;

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/auth/selectors';
import { requestContactsThunk } from 'redux/contact/operationsCont';
import { selectContactsError, selectContactsIsLoading } from 'redux/contact/selectorCont';



const ContactsPage = () => {
  const authentificated = useSelector(selectAuthentificated);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  if (!authentificated) return <Navigate to="/login" />;
  return (
    <section>
      <div>
        <ContactForm />
        <Filter />
  
        {isLoading && <h2>Loading...</h2>}
        {error && <p>Oops, some error occured... {error}</p>}
        <ContactList />
      </div>
    </section>
  );
};
export default ContactsPage;

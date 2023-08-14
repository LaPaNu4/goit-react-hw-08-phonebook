const ContactsPage = () => {




    
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Name:</p>
            <input name="contactName" type="text" required />
          </label>
          <br />
          <label>
            <p>Number:</p>
            <input name="contactNumber" type="text" required />
          </label>
          <br />
          <StyledSubmitBtn htmlType="submit">Add contact</StyledSubmitBtn>
        </form>

        {isLoading && <h2>Loading...</h2>}
        {error && <p>Oops, some error occured... {error}</p>}
        <ul>
          {showContacts &&
            contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <h3>Name: {contact.name}</h3>
                  <p>Number: {contact.number}</p>
                  <button
                    onClick={() => handleDeleteContact(contact.id)}
                    type="button"
                    aria-label="Delete contact"
                  >
                    &times;
                  </button>
                </li>
              );
            })}
        </ul>
      </section>
    );


};
export default ContactsPage
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { registerUserThunk } from 'redux/auth/operations';
import { selectAuthentificated } from 'redux/auth/selectors';
import { Section } from './register.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.userName.value;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;
    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };
  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <Section>
      <div>
        <h1>Register Your Account</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Name:</p>
            <input name="userName" type="text" required minLength={2} />
          </label>
          <br />
          <label>
            <p>Email:</p>
            <input name="userEmail" type="email" required />
          </label>
          <br />
          <label>
            <p>Password:</p>
            <input name="userPassword" type="password" required minLength={7} />
          </label>
          <br />
          <button className="button-13" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </Section>
  );
};
export default RegisterPage;

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { loginUserThunk } from 'redux/auth/operations';
import { selectAuthentificated } from 'redux/auth/selectors';
import { Section } from './login.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.userEmail.value;
    const password = form.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };
  if (authenticated) return <Navigate to="/contacts" />;
  return (
    <Section>
      <div>
        <h1>Login Into Your Account</h1>
        <form onSubmit={handleSubmit}>
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
            Sign In
          </button>
        </form>
      </div>
    </Section>
  );
};
export default LoginPage;

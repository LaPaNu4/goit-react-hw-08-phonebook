

const LoginPage = () => {
    const handleSubmit = (e) => { 
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.element.userEmail.value
        const pasword = form.element.userPassword.value


    }
    return (
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
}
export default LoginPage;
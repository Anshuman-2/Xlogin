import React, { useState } from 'react';

function XLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      // Do nothing if either field is empty
      return;
    }
    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  const isFormValid = username.trim() !== '' && password.trim() !== '';

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
              required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
              required
          />
        </div>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default XLogin;
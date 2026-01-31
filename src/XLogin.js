import React, { useState } from 'react';

function XLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  const isFormValid = username.trim() !== '' && password.trim() !== '';

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
      {message && <div>{message}</div>}
    </form>
  );
}

export default XLogin;
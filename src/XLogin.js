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
    <div style={{ maxWidth: 300, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            id="username"
            name="username"
            data-testid="username-input"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </label>
        <label style={{ marginTop: 16 }}>
          Password
          <input
            id="password"
            name="password"
            data-testid="password-input"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </label>
        <button
          type="submit"
          data-testid="submit-button"
          disabled={!isFormValid}
          style={{ width: '100%', padding: 10, marginTop: 16 }}
        >
          Submit
        </button>
      </form>
      {message && (
        <div style={{ marginTop: 20, color: message === 'Welcome, user!' ? 'green' : 'red' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default XLogin;
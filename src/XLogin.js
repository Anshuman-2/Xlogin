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
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Username
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{ width: '100%', padding: 8, marginTop: 4, display: 'block' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Password
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: 8, marginTop: 4, display: 'block' }}
            />
          </label>
        </div>
        <button type="submit" disabled={!isFormValid} style={{ width: '100%', padding: 10 }}>
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

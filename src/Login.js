// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import your styles

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = [
    { username: 'John', password: '1234' },
    { username: 'Jane', password: '123456' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUser = users.find(user => user.username === username && user.password === password);
    if (validUser) {
      onLogin(true);
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;


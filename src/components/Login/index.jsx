import React, { useState } from 'react';
import axios from "axios"

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('qwerty');

  const handleLogin = async(e) => {
    e.preventDefault();

    if (email  && password) {
        let data = {
            email: email,
            password: password,
        }
        let result = await axios.post('http://zarathos.tech:5000/liveproject/Login', data)
        if(result){
            window.alert("Login Success")
            setIsAuthenticated(true)
        }
  };
}

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;

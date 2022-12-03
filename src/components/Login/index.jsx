import React, { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('qwerty');
  const [error, setError] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleLogin = async(e) => {
    e.preventDefault();
    setIsSubmit(true)
    if (email && password) {
      setError(null)
        let data = {
            email: email,
            password: password,
        }
        let result = await axios.post('https://zarathos.tech/liveproject/Login', data)
        console.log(result)
        if(result.data){
            setIsAuthenticated(true)
        }else{
          setError(true)
        }
  };
}
useEffect(()=>{
  console.log(error,isSubmit)
if(error===true&&isSubmit===true){
  Swal.fire({
    icon: 'error',
    title: 'Error Problem',
    text: 'There was some issue with login credentails',
    confirmButtonText: 'Yes',
  }).then(result => {
    console.log(result,"line 36");
    setError(null)
  });
}
},[error])

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

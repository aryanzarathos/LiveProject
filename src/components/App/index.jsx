import React, { useState } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';
import SignUp from '../SignUp';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const App = () => {
  const history=useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes("/Login")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [window.location.pathname])

  const OnClickHandel=(data)=>{
    if(data==="Login"){
      history("/Login")
    }else{
      history("/SignUp")
    }
    
  }
  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <React.Fragment>
          <div className="small-container" style={{ marginTop: '12px' }}>
            <button style={{ margin: '12px' }} onClick={()=>OnClickHandel("Login")}>Login</button>
            <button style={{ margin: '12px' }} onClick={()=>OnClickHandel("SignUp")}>Sign Up</button>
          </div>
          {
            isLogin ? (
              <Login setIsAuthenticated={setIsAuthenticated} />

            ) : (
              <SignUp setIsAuthenticated={setIsAuthenticated} />
            )
          }
        </React.Fragment>
      )}
    </>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';
import SignUp from '../SignUp';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  // }, []);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <React.Fragment>
          <div className="small-container"  style={{ marginTop: '12px' }}>
            <button style={{ margin: '12px' }} onClick={()=>setIsLogin(true)}>Login</button>
            <button style={{ margin: '12px' }}onClick={()=>setIsLogin(false)}>Sign Up</button>
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

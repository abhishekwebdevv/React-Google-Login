import React, { useState } from 'react';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (res) => {
    console.log(res);
    if (res.accessToken) {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    console.log('Successfully Logged Out');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>React Google Login</h1>
      {isLoggedIn ? <p>User is Logged In</p> : <p>User Is Logged Out</p>}
      {isLoggedIn ? (
        <GoogleLogout
          clientId={client_id}
          buttonText="Logout"
          onLogoutSuccess={logout}
        />
      ) : (
        <GoogleLogin
          clientId={client_id}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              This is My Custom Button
            </button>
          )}
        />
      )}
    </div>
  );
}

export default App;

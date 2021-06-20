import React from 'react';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  const responseGoogle = (res) => {
    console.log(res);
  };

  const logout = () => {
    console.log('Successfully Logged Out');
  };

  return (
    <div className="App">
      <h1>React Google Login</h1>
      <GoogleLogin
        clientId={client_id}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      <GoogleLogout
        clientId={client_id}
        buttonText="Logout"
        onLogoutSuccess={logout}
      />
    </div>
  );
}

export default App;

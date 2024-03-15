import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider, AuthContext } from 'react-oauth2-code-pkce';

const authConfig = {
  clientId: 'clientId',
  authorizationEndpoint: 'http://localhost:8080/api/oauth2/authorize',
  tokenEndpoint: 'http://localhost:8080/api/oauth2/token',
  redirectUri: 'http://localhost:3000',
  scope: 'openid read write'
};

const UserInfo = () => {
  const { token, tokenData } = useContext(AuthContext);

  return (
    <div>
      <h4>Access Token..</h4>
      <pre>{token}</pre>
      <h4>User Information from JWT...</h4>
      <pre>{JSON.stringify(tokenData, null, 2)}</pre>
    </div>

  );

};

function App() {


  return (
    <AuthProvider authConfig={authConfig}>
      <UserInfo />
    </AuthProvider>
  );
}

export default App;

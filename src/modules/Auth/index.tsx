import React, { useContext } from 'react';

import Login from './Login';
import Logout from './Logout';

import { UserContext } from 'contexts';

const Auth: React.FC = () => {
  const { user } = useContext(UserContext);

  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default Auth;

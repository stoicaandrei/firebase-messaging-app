import React, { useContext } from 'react';

import { Button } from 'antd';

import { UserContext } from 'contexts';

const Login: React.FC = () => {
  const { loginWithGoogle } = useContext(UserContext);

  return <Button onClick={loginWithGoogle}>Login with google</Button>;
};

export default Login;

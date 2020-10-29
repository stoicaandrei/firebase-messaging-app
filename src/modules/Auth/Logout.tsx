import React, { useContext } from 'react';

import { Button } from 'antd';

import { UserContext } from 'contexts';

const Logout: React.FC = () => {
  const { logout } = useContext(UserContext);

  return <Button onClick={() => logout()}>Logout</Button>;
};

export default Logout;

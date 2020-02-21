import React, { useContext } from 'react';
import {UserContext} from './context/UserContext/UserProvider';
import { UserMenu } from './UserMenu/UserMenu';
import { Login } from './Login/Login';

function App() {

  const { user } = useContext(UserContext);

  return (
    <div className="App">

        { user ? <UserMenu/> : <Login/> }

    </div>
  );
}

export default App;

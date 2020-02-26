import React, { useContext } from 'react';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Login } from './Components/Login/Login';
import { UserContext } from './context/context';

function App() {

  const { user } = useContext(UserContext);

  return (
    <div className="App">

        { user ? <Dashboard/> : <Login/> }

    </div>
  );
}

export default App;

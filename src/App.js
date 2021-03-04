import React, {useState} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import ListUsers from './Components/ListUsers/ListUsers';
import User from './Components/User/User';
import Admin from './Components/Admin/Admin';
import Navbar from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

function App() {

    const [isAuth, setIsAuth] = useState(false)
    const login = () => setIsAuth(true)
    const logout = () => setIsAuth(false)

  return (
    <div className="App">
      <Navbar isAuth={isAuth} login={login} logout={logout}/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={ListUsers} />
        <Route path='/users/user/:id' component={User} />
        <PrivateRoute path='/admin' component={Admin} isAuth={isAuth}/>
      </Switch>
    </div>
  );
}

export default App;

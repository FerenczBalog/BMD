import { Outlet} from "react-router-dom";
import logo from './media/logo.svg';
import './style/App.css';
import config from './config.js'
import { useState } from 'react';
import Dashboard from "./dashboard";

const {adminCredentials} = config;

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === adminCredentials.username && password === adminCredentials.password) {
      
    } else {
      alert("Wrong username or/and password!")
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className='log-reg-container'>

          <form onSubmit={handleLogin}>

            <h3>Login</h3>

            <label htmlFor="username">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" id="Lusr" required />

            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="Lpwd" required />  

            <button id="login" type="submit">Login</button>           

          </form>

          <form action="" method="post">

            <h3>Register</h3> 

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="Rmail" required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="Rpwd" required />  

            <label htmlFor="username">Username</label>
            <input type="text" name="usrname" id="Rusr" />

            <button type="submit">Submit</button>  
          </form>
        </div>


      </header>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

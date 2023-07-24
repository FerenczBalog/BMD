import { Outlet, NavLink } from 'react-router-dom';
import logo from './media/logo.svg';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className='log-reg-container'>
          <form action="" method="get">

            <h3>Login</h3>

            <label htmlFor="username">Username</label>
            <input type="username" name="username" id="Lusr" required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="Lpwd" required />  

            <NavLink to="/dashboard">Submit</NavLink>

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

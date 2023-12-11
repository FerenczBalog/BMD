import './style/App.css';
import Profile from './profile';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Dashboard= () => {  

  const [contentVisible, setContentVisible] = useState(true);

    const handleButtonClick = () => {
      setContentVisible(false);
    };

    const reverse = () => {
      setContentVisible(true)
    }

  return (
    <div className='Dashboard'>
      
      <header>
        <h2>Dashboard</h2>
        <nav>
            <NavLink onClick={handleButtonClick} to="financial" >Financial</NavLink>
            <NavLink onClick={handleButtonClick} to="inventory" >Inventory</NavLink>
            <NavLink onClick={handleButtonClick} to="overview"  >Overview</NavLink>
            <NavLink onClick={reverse} to={"/dashboard"} >Profile</NavLink>
            <NavLink to={"/"} >Logout</NavLink>
        </nav>
      </header>

      <div className='DashBody'> 
        {contentVisible ? ( <Profile /> ) : null}
        
        <Outlet />

      </div>
      
    </div>
  );
}

export default Dashboard
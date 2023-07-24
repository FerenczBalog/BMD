import "./style/Nav.css"
import { NavLink } from 'react-router-dom';



const Nav = () => {

    

    return  (
        <nav>
            <NavLink  to="financial" >Financial</NavLink>
            <NavLink  to="inventory" >Inventory</NavLink>
            <NavLink  to="overview"  >Overview</NavLink>
            {/*
                <a href="#">Customers</a>
                <a href="#">Profil</a>
            */}
        </nav>
    )
}

export default Nav
import { NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navmenu'>
                <div className='navlink'>
                    <ul>
                        <li>
                            <NavLink to="/screen1">Screen 1</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/screen2">Screen 2</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/screen3">Screen 3</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/screen4">Screen 4</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/artists">Artists</NavLink> 
                        </li>
                    </ul>
                </div>  
            </div>
        </nav>
    )
}
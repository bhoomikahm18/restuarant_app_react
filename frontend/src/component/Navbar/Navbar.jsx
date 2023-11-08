import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className='container'>
            <div className='navbar'>
                Bhoomi's Kitchen
                <Link to={"/login"}>
                    <button className='btn'>Login</button>
                </Link>
                <Link to={"/restuarant"}>
                    <button className='btn'>Restuarant</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
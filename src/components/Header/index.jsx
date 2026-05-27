import './index.css'
import { Link, useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate()

    const onClickLogOut = () => {
        localStorage.removeItem('userDetails')

        navigate('/login', {replace: true})
    }

    return (
        <nav className='nav-header'>
            <div className='div-container'>
                <div>
                <Link to="/">
                    <h1 className='logo'>WATCHES</h1>
                </Link>
                </div>
                <div className='align'>
                <ul className='nav-ul-menu'>
                    <li>
                        <Link to="/" className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className='nav-link'>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className='nav-link'>
                            Cart
                        </Link>
                    </li>
                </ul>
                <div>
                <button
                    type='button'
                    className='header-btn'
                    onClick={onClickLogOut}
                >
                    LogOut
                </button>
                </div>
                 </div>
            </div>
        </nav>
    )
}
export default Header
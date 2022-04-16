import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
// For logging out
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    
    const onLogout = () => {
        dispatch(logout())
        // Reset state to null. Katong reducer.
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul>
                {user ? (
                    <li>
                        <button className="btn" onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (<>
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt /> Login
                        </Link>
                        <Link to='/register'>
                            <FaUser /> Register
                        </Link>
                    </li>
                </>)}
            </ul>
        </header>
    )
}

export default Header
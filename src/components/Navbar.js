// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faCloud, faPencil  } from '@fortawesome/free-solid-svg-icons'
import { useUserAuth } from "../context/UserAuthContext";
import Logo from "../images/logo.png";


const Navbar = () => {
  const {user, logOut} = useUserAuth();


    const handleLogOut = async () => {
        try{
            await logOut();
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="navbar">
            <div className="nav-1">
                <img className="logo" src={Logo} alt="Logo" />
                <p className="title">CODEPLAY</p>
                {/* <button className="edit-title-btn"><FontAwesomeIcon icon={faPencil}/></button> */}
            </div>
            <div className="nav-2">
                <p className="user">{user.email}</p>
                <button className="btn" onClick={handleLogOut}>Log Out</button>
                        {/* <button className="btn"><FontAwesomeIcon icon={faCloud}/> Save</button> */}
                        {/* <Link to="/SignUp" className="link"><button className="btn signup-btn">Sign Up</button></Link>
                        <Link to="Login" className="link"><button className="btn">Login</button></Link> */}
                
                {/* <button className="btn"><FontAwesomeIcon icon={faUser}/></button> */}
            </div>
        </div>
    )
}

export default Navbar;
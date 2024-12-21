import {NavLink, useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <div className="logo">Fish Meats</div>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
        <NavLink to="/users"><li>Users</li></NavLink>
      </ul>
      <button onClick={()=>navigate("/login", {replace: true})}>Login</button>
    </div>
  )
}

export default Navbar

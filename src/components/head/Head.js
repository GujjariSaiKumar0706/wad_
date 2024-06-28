import { NavLink } from "react-router-dom";
import './Head.css';
function Head(){

    return(
      <div className="one">
        <ul className="nav  justify-content-end">
  <li className="nav-item">
    <NavLink className="nav-link "  to=" ">
        Home
        </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link "  to="signup">
        Signup
        </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link "  to="signin">
        Signin
        </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link "  to="technologies">
        Technologies
        </NavLink>
  </li>
  
  
</ul>



</div>




    )
}

export default Head;
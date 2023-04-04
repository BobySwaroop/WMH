import React, {useEffect, useState} from 'react';
import logo from "../../images/Logo-header.png";
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth';

function Navbar() {
  const [user, setUser] = useState(null);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
      setUser(user);
    } else {
      console.log("You are logged out");
      setUser(null);
    }
  });
}, []);

if (user === null){
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" >
            <img src={logo} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className='navbar-nav'>
                <li className='"nav-item'>
                  <Link to={"/"} className='nav-link m-2 Home'>Home</Link>
                </li>
                <li className='"nav-item'>
                  <Link to={"/"}  className='nav-link m-2'>Digital</Link>
                </li>
                <li className='"nav-item'>
                  <Link to={"/"} className='nav-link m-2'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

return (
  <div className='App'>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" >
            <img src={logo} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className='navbar-nav'>
                <li className='"nav-item'>
                  <Link to={"/"} className='nav-link m-2 Home'>Home</Link>
                </li>
                <li className='"nav-item'>
                  <Link to={"/"}  className='nav-link m-2'>Digital</Link>
                </li>
                <li className='"nav-item'>
                  <Link to={"/"} className='nav-link m-2'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-end me-4 m-2">Hello, {user.email}</p>
              <Link to={"/"} className="btn btn-primary mt-2 d-inline m-2" onClick={() => signOut(auth)}>Logout</Link>
        </div>
      </nav>
  </div>
)
}

export default Navbar;

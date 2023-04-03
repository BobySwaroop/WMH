import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

function SignIn() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
}

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
}

const handleSubmit = async (e) => {
  e.preventDefault();
  if (email && password ) {
    // redirect to admin component
    window.location.href = '/dashboard';
}
};



  return (
    <>
    <Navbar/>
    <>
      <div className='container bg-dark w-75 main-contianer'>
        <div className='row Pre p-5'>
          <div className='col-10 mx-auto'>
            <div className='row text-center'>
              <h1 className='text-danger'>LogIn</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container bg-light w-75 main-contianer'>
          <div className='row p-5'>
            <div className='col-10 mx-auto'>
                <div className="row w-50 mx-auto">
                    <div className="col-md-12">
                        <input className='form-control m-2' type="text" placeholder='Email' value={email} onChange={handleEmailChange}/>
                        <input   className='form-control m-2' type="text" placeholder='Password' value={password} onChange={handlePasswordChange}/>
                    </div>
                </div>
                <div className="row w-50 mx-auto">
                    <div className="col-md-12">
                       <Link to={"/dashboard"} className='btn btn-success w-100 m-2' onClick={handleSubmit} >Log In</Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </>

  );
}

export default SignIn;

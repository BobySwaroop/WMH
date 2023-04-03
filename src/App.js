import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { FirebaseProvider } from './Components/firebase-config';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignIn/SignUp';



function App() {
  return (
    <>
    <Router>
      <FirebaseProvider>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
    </FirebaseProvider>
    </Router>
    </>
  );
}

export default App;

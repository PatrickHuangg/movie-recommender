import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import ApiCall from './Api.jsx';
import PrimarySearchAppBar from './Navbar.jsx';
import SignIn from '../pages/LoginPage.jsx';
import SignUp from '../pages/RegisterPage.jsx';
import FindTaste from '../pages/FindTaste.jsx';

export default function PageRoutes () {
  const [token, setToken] = React.useState(null);
  return (
    <div>
      <PrimarySearchAppBar token={token} setToken={setToken}/>
      <Routes>
        <Route path="/dashboard" element={<ApiCall />} />
        <Route path="/" element={<ApiCall />} />
        <Route path="/login" element={<SignIn token={token} setToken={setToken}/>} />
        <Route path="/register" element={<SignUp token={token} setToken={setToken}/>} />
        <Route path="/findTaste" element={<FindTaste/>} />
      </Routes>
    </div>
  )
}

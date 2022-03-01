import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswdLost from './LoginPasswdLost';
import LoginPasswdReset from './LoginPasswdReset';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LoginPasswdLost />} />
        <Route path="reset" element={<LoginPasswdReset />} />
      </Routes>
    </div>
  );
};

export default Login;

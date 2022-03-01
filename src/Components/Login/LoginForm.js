import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return json;
        });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Sign in</Button>
      </form>
      <Link to="/login/create">Sign up</Link>
    </div>
  );
};

export default LoginForm;

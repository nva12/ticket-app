import { useState } from 'react';
import { useRouter } from 'next/router';
import useRequest from '../../hooks/use-request';
import StyledInputField from '../../components/StyledInputField';
import StyledInputGroup from '../../components/StyledInputGroup';
import StyledForm from '../../components/StyledForm';
import { Button, Heading, Words } from 'arwes';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Heading node='h1'>Sign In</Heading>
      <p>
        <Words animate>Login with your GalakTix account credentials:</Words>
      </p>
      <StyledInputGroup>
        <label htmlFor='email'>Email address</label>
        <StyledInputField
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <label htmlFor='password'>Password</label>
        <StyledInputField
          value={password}
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          required
        />
      </StyledInputGroup>
      {errors}
      <Button animate>Sign In</Button>
    </StyledForm>
  );
};

export default SignIn;

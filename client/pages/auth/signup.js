import { useState } from 'react';
import { useRouter } from 'next/router';
import useRequest from '../../hooks/use-request';
import { Button, Heading, Words } from 'arwes';
import StyledInputField from '../../components/StyledInputField';
import StyledInputGroup from '../../components/StyledInputGroup';
import StyledForm from '../../components/StyledForm';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
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
      <Heading node='h1'>Sign Up</Heading>
      <p>
        <Words animate>Create your GalakTix account now:</Words>
      </p>
      <StyledInputGroup>
        <label htmlFor='email'>Email:</label>
        <StyledInputField
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <label htmlFor='password'>Password:</label>
        <StyledInputField
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          required
        />
      </StyledInputGroup>
      {errors}
      <Button animate>Sign Up</Button>
    </StyledForm>
  );
};

export default SignUp;

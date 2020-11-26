import { useState } from 'react';
import { useRouter } from 'next/router';
import useRequest from '../../hooks/use-request';
import { Button, Heading, Words } from 'arwes';
import StyledInputField from '../../components/StyledInputField';
import StyledInputGroup from '../../components/StyledInputGroup';
import StyledForm from '../../components/StyledForm';

const NewTicket = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title,
      price,
    },
    onSuccess: () => router.push('/'),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Heading node='h1'>Create a ticket</Heading>
      <StyledInputGroup>
        <label htmlFor='title'>Title</label>
        <StyledInputField
          id='title'
          value={title}
          type='text'
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <label htmlFor='price'>Price</label>
        <input
          className='inputWithBlurMethod'
          id='price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type='text'
          required
          onBlur={onBlur}
        />
      </StyledInputGroup>
      {errors}
      <Button animate>Submit</Button>
      <style jsx>{`
        .inputWithBlurMethod {
          background: transparent;
          border: none;
          border-bottom: solid 1px #26dafd;
          padding: 0.5rem 2rem;
          color: #26dafd;
          font-family: inherit;
          font-size: 1.25rem;
          outline: none;
        }
        input:focus {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </StyledForm>
  );
};

export default NewTicket;

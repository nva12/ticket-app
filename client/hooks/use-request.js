import axios from 'axios';
import { useState } from 'react';
import ErrorAlert from '../components/ErrorAlert';

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, {
        ...body,
        ...props,
      });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <ErrorAlert>
          {err.response.data.errors.map((err) => (
            <li key={err.message}>{err.message}</li>
          ))}
        </ErrorAlert>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;

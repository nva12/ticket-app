import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import { useRouter } from 'next/router';
import { Frame, Content, List } from 'arwes';
import ErrorAlert from '../../components/ErrorAlert';

const OrderShow = ({ order, currentUser }) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => {
      router.push('/orders');
    },
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  if (timeLeft < 0) {
    return (
      <ErrorAlert>
        <li>Order expired</li>
      </ErrorAlert>
    );
  }

  return (
    <Frame
      animate={true}
      level={3}
      corners={6}
      style={{ margin: '2rem auto', maxWidth: '600px' }}
    >
      <div className='container'>
        <Content>
          <p>
            This ticket has been set aside for you. Don't wait to complete your
            payment!
          </p>
          <p>{timeLeft} seconds until this order expires.</p>
          <blockquote data-layer='success'>
            <p>
              <em>Developer's Note:</em>
            </p>
            <span style={{ fontSize: '1rem' }}>
              To test the payment processing integration with Stripe, use the
              following test credit card information:
              <List node='ul'>
                <li>Card number: 4242 4242 4242 4242</li>
                <li>Expires: any date in the future</li>
                <li>CVC: any 3 digits</li>
              </List>
            </span>
          </blockquote>
          <div className='stripe-container'>
            <StripeCheckout
              token={({ id }) => doRequest({ token: id })}
              stripeKey='pk_test_51HqJhSAre9qY1TYLs8EEoeBvzfuLE1th6DdkwM6DCXV4Rhz4473NIGT2TXPC5jkYPPJ9liJff4mPRlcxVjd2CTAD00pTjpZ5pr'
              amount={order.ticket.price * 100}
              email={currentUser.email}
            />
          </div>
        </Content>
        {errors}
      </div>
      <style jsx>
        {`
          .container {
            padding: 1rem;
          }
          .stripe-container {
            margin: 1rem 0;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </Frame>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;

import useRequest from '../../hooks/use-request';
import { useRouter } from 'next/router';
import { Button, Frame, Content } from 'arwes';

const TicketShow = ({ ticket }) => {
  const router = useRouter();
  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) => {
      router.push('/orders/[orderId]', `/orders/${order.id}`);
    },
  });

  return (
    <Frame
      animate={true}
      level={3}
      corners={6}
      style={{ margin: '2rem auto', maxWidth: '600px' }}
    >
      <div className='container'>
        <Content>
          <h3>{ticket.title}</h3>
          <p>Price: &#8382;{ticket.price}</p>
          {errors}
          <Button onClick={() => doRequest()} animate layer='success'>
            Purchase
          </Button>
        </Content>
      </div>
      <style jsx>
        {`
          .container {
            padding: 1rem;
          }
        `}
      </style>
    </Frame>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;

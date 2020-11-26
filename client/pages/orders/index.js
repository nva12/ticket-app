import { List, Words, Heading } from 'arwes';

const OrderIndex = ({ orders }) => {
  return (
    <div style={{ margin: '2rem 0' }}>
      <Heading node='h1'>Orders History:</Heading>
      <List
        node='ul'
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
      >
        {orders.map((order) => {
          const statusTextColor =
            order.status === 'complete' ? 'success' : 'alert';
          return (
            <li key={order.id}>
              {order.ticket.title} - &#8382;{order.ticket.price} -{' '}
              <span>
                <Words layer={statusTextColor}>order {order.status}</Words>
              </span>
            </li>
          );
        })}
      </List>
    </div>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');

  return { orders: data };
};

export default OrderIndex;

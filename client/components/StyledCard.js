import { Content, Button, Frame } from 'arwes';
import Link from 'next/link';

const StyledCard = ({ title, price, ticketId }) => {
  return (
    <>
      <Frame level={3} corners={6}>
        <div className='container'>
          <Content>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <Link href='/tickets/[ticketId]' as={`/tickets/${ticketId}`}>
              <Button>View</Button>
            </Link>
          </Content>
        </div>
      </Frame>
      <style jsx>
        {`
          .container {
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default StyledCard;

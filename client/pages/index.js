import StyledCard from '../components/StyledCard';
import { Content, Words } from 'arwes';

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <StyledCard
        key={ticket.id}
        title={ticket.title}
        price={ticket.price}
        ticketId={ticket.id}
      />
    );
  });

  return (
    <div style={{ marginTop: '2rem' }}>
      <Content>
        <h1>Welcome to GalakTix</h1>
        <p>
          <Words animate>
            The only website to buy, exchange, and resell your tickets to any
            intergalactic event!
          </Words>
        </p>
        <h3>Browse available items:</h3>
      </Content>
      <div className='grid-container'>
        {ticketList}
        <StyledCard title='Concert' price='20' ticketId='qwerty123' />
        <StyledCard title='Game' price='50' ticketId='qjcjkdbvjfdbvbkv' />
        <StyledCard title='Concert' price='20' ticketId='qwerty123' />
        <StyledCard title='Game' price='50' ticketId='qjcjkdbvjfdbvbkv' />
      </div>
      <style jsx>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem 3rem;
            margin: 3rem 0;
          }
        `}
      </style>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;

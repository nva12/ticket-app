import StyledCard from '../components/StyledCard';
import { Content, Words } from 'arwes';

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.reverse().map((ticket) => {
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
      <div className='tickets-container'>{ticketList}</div>
      <style jsx>
        {`
          .tickets-container {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 2rem;
            margin: 3rem 0;
          }
          @media (min-width: 760px) {
            .tickets-container {
              grid-template-columns: 1fr 1fr;
              gap: 3rem 3rem;
            }
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

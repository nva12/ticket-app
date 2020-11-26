import { Footer, Link, Content } from 'arwes';
import ContentContainer from './ContentContainer';

const StyledFooter = () => {
  return (
    <>
      <div className='footer'>
        <Footer>
          <ContentContainer>
            <p style={{ fontSize: '1.25rem' }} className='mb-on-mobile'>
              &copy; 2020{' '}
              <Link href='https://www.nicolasvallee.dev/'>Nicolas Vallée</Link>
            </p>
            <p
              style={{ fontSize: '1rem', marginBottom: '1rem' }}
              className='hide-on-mobile'
            >
              Credits and thanks:{' '}
              <Link href='https://www.udemy.com/course/microservices-with-node-js-and-react/'>
                Microservices architecture
              </Link>{' '}
              taught by Stephen Grider |{' '}
              <Link href='https://arwes.dev/'>Arwes UI library</Link> by Romel
              Pérez
            </p>
          </ContentContainer>
        </Footer>
      </div>
      <style jsx>
        {`
          .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
          }
          p {
            margin: 0;
            padding-top: 1rem;
          }
          .hide-on-mobile {
            display: none;
          }
          .mb-on-mobile {
            margin-bottom: 1rem;
          }
          @media (min-width: 760px) {
            .hide-on-mobile {
              display: block;
            }
            .mb-on-mobile {
              margin-bottom: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default StyledFooter;

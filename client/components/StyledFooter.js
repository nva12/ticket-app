import { Footer } from 'arwes';
import ContentContainer from './ContentContainer';

const StyledFooter = () => {
  return (
    <>
      <div className='footer'>
        <Footer>
          <ContentContainer>
            <p>&copy; 2020 Nicolas Vallée</p>
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
            padding: 1rem 0;
          }
        `}
      </style>
    </>
  );
};

export default StyledFooter;

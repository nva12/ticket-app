import { ThemeProvider, createTheme, Arwes } from 'arwes';
import buildClient from '../api/build-client';
import Header from '../components/Header';
import StyledFooter from '../components/StyledFooter';
import ContentContainer from '../components/ContentContainer';
import '../styles.css';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes
        animate
        pattern='/images/glow.png'
        background={{
          small: '/images/background.jpg',
          medium: '/images/background-medium.jpg',
          large: '/images/background-large.jpg',
          xlarge: '/images/background-large.jpg',
        }}
      >
        <div className='page-container'>
          <Header currentUser={currentUser} />
          <ContentContainer>
            <Component currentUser={currentUser} {...pageProps} />
          </ContentContainer>
          <StyledFooter />
        </div>
        <style jsx>
          {`
            .page-container {
              min-height: 100vh;
              overflow: hidden;
              display: block;
              position: relative;
              padding-bottom: 100px;
            }
          `}
        </style>
      </Arwes>
    </ThemeProvider>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;

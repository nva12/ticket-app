import Link from 'next/link';
import { Header as ArwesHeader, Link as ArwesLink, Logo } from 'arwes';
import ContentContainer from './ContentContainer';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sell Tickets', href: '/tickets/new' },
    currentUser && { label: 'My Orders', href: '/orders' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} style={{ marginLeft: '1.5rem' }}>
          <Link href={href}>
            <ArwesLink>{label}</ArwesLink>
          </Link>
        </li>
      );
    });

  return (
    <ArwesHeader animate>
      <ContentContainer>
        <nav className='navbar'>
          <Link href='/'>
            <ArwesLink
              style={{
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            >
              <Logo animate size={60} style={{ marginRight: '1.5rem' }} />
              <h1>GalakTix</h1>
            </ArwesLink>
          </Link>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ul className='links-list'>{links}</ul>
          </div>
        </nav>
      </ContentContainer>
      <style jsx>
        {`
          .navbar {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .links-list {
            list-style: none;
            display: flex;
            align-items: center;
            margin-top: 0;
            margin-left: -1.5rem;
          }
          @media (min-width: 640px) {
            .navbar {
              flex-direction: row;
              justify-content: space-between;
            }
            .links-list {
              margin-top: 21px;
              margin-left: 0;
            }
          }
        `}
      </style>
    </ArwesHeader>
  );
};

export default Header;

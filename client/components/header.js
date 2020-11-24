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
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href='/'>
            <ArwesLink style={{ display: 'flex', alignItems: 'center' }}>
              <Logo animate size={60} style={{ marginRight: '1.5rem' }} />
              <h1>GalakTix</h1>
            </ArwesLink>
          </Link>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {links}
            </ul>
          </div>
        </nav>
      </ContentContainer>
    </ArwesHeader>
  );
};

export default Header;

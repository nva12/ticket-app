import { Frame, List } from 'arwes';

const ErrorAlert = ({ children }) => {
  return (
    <Frame
      animate={true}
      level={3}
      corners={4}
      layer='alert'
      style={{ margin: '2rem 0' }}
    >
      <List node='ul' style={{ marginTop: '20px', marginRight: '20px' }}>
        {children}
      </List>
    </Frame>
  );
};

export default ErrorAlert;

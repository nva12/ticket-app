const ContentContainer = ({ children }) => {
  return (
    <div
      style={{
        padding: '0 1rem',
        margin: '0 auto',
        maxWidth: '1200px',
      }}
    >
      {children}
    </div>
  );
};

export default ContentContainer;

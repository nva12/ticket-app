const StyledInputGroup = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
};

export default StyledInputGroup;

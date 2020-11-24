const StyledForm = ({ children }) => {
  return (
    <>
      <form>{children}</form>
      <style jsx>{`
        form {
          max-width: 600px;
          margin: 2rem auto;
        }
      `}</style>
    </>
  );
};

export default StyledForm;

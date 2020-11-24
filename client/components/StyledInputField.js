const StyledInputField = () => {
  return (
    <>
      <input />
      <style jsx>{`
        input {
          background: transparent;
          border: none;
          border-bottom: solid 1px #26dafd;
          padding: 0.5rem 2rem;
          color: #26dafd;
          font-family: inherit;
          font-size: 1.25rem;
          outline: none;
        }
        input:focus {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
};

export default StyledInputField;

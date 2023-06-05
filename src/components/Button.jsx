export const Button = ({ onClick }) => {
  return (
    <button
      className="btn btn-outline-success my-2 my-sm-0 button"
      onClick={onClick}
    >
      Load more ...
    </button>
  );
};

export const Searchbar = ({ submit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;
    submit(value);
  };

  return (
    <header className="navbar navbar-light bg-light searchbar">
      <form className="form inline-block searchForm" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="btn btn-outline-success my-2 my-sm-0 searchForm-button"
        >
          Search
        </button>

        <input
          name="query"
          className="form-control"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

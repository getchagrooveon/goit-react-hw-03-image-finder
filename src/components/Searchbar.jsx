import PropTypes from 'prop-types';

export const Searchbar = ({ startSearch, searchText, onSubmit, onChange }) => {
  startSearch = event => {
    event.preventDefault();
    this.handleSubmit(searchText);
  };
  return (
    <>
      <form className="navbar navbar-light bg-light sticky form-inline">
        <input
          name="search"
          className="form-control mr-sm-2"
          placeholder="Search"
          aria-label="Search"
          onSubmit={onSubmit}
          onChange={onChange}
          type="text"
        />
      </form>
    </>
  );
};

Searchbar.propTypes = {
  //   username: PropTypes.string,
  //   location: PropTypes.string,
  //   avatar: PropTypes.string,
  //   stats: PropTypes.object,
};

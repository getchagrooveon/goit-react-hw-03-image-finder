import PropTypes from 'prop-types';

export const Button = ({}) => {
  return (
    <>
      <div id="loaddiv" className="navbar navbar-light bg-light invisible">
        <button
          type="button"
          id="load"
          className="btn btn-outline-success my-2 my-sm-0"
        >
          Load more images
        </button>
      </div>
    </>
  );
};

Button.propTypes = {
  //   username: PropTypes.string,
  //   location: PropTypes.string,
  //   avatar: PropTypes.string,
  //   stats: PropTypes.object,
};

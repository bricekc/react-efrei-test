import PropTypes from 'prop-types';

Search.propTypes = {
  criteria: PropTypes.string.isRequired,
  setCriteria: PropTypes.func.isRequired
};

function Search(props) {
  const { criteria, setCriteria } = props;
  return (
    <input
      className="form-control"
      placeholder="recherche"
      value={criteria}
      onChange={(event) => setCriteria(event.target.value)}
    />
  );
}

export default Search;

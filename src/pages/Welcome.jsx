import PropTypes from 'prop-types';
import Hello from '../components/hello.jsx';

Welcome.propTypes = {
  name: {
    type: PropTypes.string.isRequired
  }
};

function Welcome(props) {
  const { name } = props;
  return (
    <>
      <Hello name={name} />
    </>
  );
}

export default Welcome;

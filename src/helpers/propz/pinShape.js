import PropTypes from 'prop-types';

const pinShape = PropTypes.shape({
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  uid: PropTypes.string,
  boardId: PropTypes.string,
});

export default { pinShape };

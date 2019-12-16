import PropTypes from 'prop-types';

import React from 'react';
import pinShape from '../../helpers/propz/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }
  
}

export default Pin;

import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class PinForm extends React.Component {
  static propTypes= {
    addPin: PropTypes.func,
    selectedBoardId: PropTypes.string,
  }

  state = {
    pinTitle: '',
    pinImgUrl: '',
  }

  savePinEvent = (e) => {
    const { addPin } = this.props;
    e.preventDefault();
    const newPin = {
      title: this.state.pinTitle,
      imgUrl: this.state.pinImgUrl,
      uid: authData.getUid(),
      boardId: selectedBoardId,
    };
    addPin(newPin);
    this.setState({ pinTitle: '', pinImgUrl: '' });
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  imgUrlChange = (e) => {
    e.preventDefault();
    this.setState({ pinImgUrl: e.target.value });
  }
  // how do we get the board data to assign to the pin?

  render() {
    return (
      <form className='col-6 offset-3 PinForm'>
        <div className="form-group">
          <label htmlFor="pin-title">Pin Title:</label>
          <input
            type="text"
            className="form-control"
            id="pin-title"
            placeholder="Picture for Pin"
            value={this.state.pinTitle}
            onChange={this.titleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin-image-url">Pin Image Url:</label>
          <input
            type="text"
            className="form-control"
            id="pin-image-url"
            placeholder="https://www.google.com"
            value={this.state.pinImgUrl}
            onChange={this.imgUrlChange}
          />
        </div>
        <button className="btn btn-secondary" onClick={this.savePinEvent}>Add Pin</button>
      </form>
    );
  }
}

export default PinForm;

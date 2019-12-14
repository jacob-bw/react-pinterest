import React from 'react';
import propTypes from 'prop-types';

import authData from '../../helpers/data/authData';
import Board from '../Board/Board';
import boardData from '../../helpers/data/boardData';

class BoardsContainer extends React.Component {
  static propTypes = {
    setSingleBoard: propTypes.func,
  }

  state ={
    boards: [],
  }

  componentDidMount() {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => {
        this.setState({ boards });
      })
      .catch((errorFromBoardsContainer) => console.error({ errorFromBoardsContainer }));
  }

  render() {
    const { setSingleBoard } = this.props;

    return (
    <div>
      {this.state.boards.map((board) => (<Board key={board.id} board={board} setSingleBoard={setSingleBoard}/>))}
    </div>);
  }
}

export default BoardsContainer;

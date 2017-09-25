import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>
        <button onClick={this.props.openDialog}>
          按钮
        </button>
      </li>
    )
  }
}

export default Item;
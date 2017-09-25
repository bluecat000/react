import React from 'react';
import Item from './Item';
import Dialog from './Dialog';

class List extends React.Component {
  constructor() {
    super();
    this.list = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      },
      {
        id: 5
      },
    ];

    this.state = {
      dialog: false,
    }
  }

  openDialog() {
    this.setState({
      dialog: true
    })
  }

  closeDialog() {
    this.setState({
      dialog: false
    })
  }

  render() {
    return (
      <div className="list">
        <ul>
          {
            this.list.map(function (v, k, arr) {
              return <Item key={v.id} id={v.id} openDialog={this.openDialog.bind(this)} />
            }, this)
          }
        </ul>
        {
          <Dialog isActive={this.state.dialog} closeDialog={this.closeDialog.bind(this)} />
        }
      </div>
    )
  }

}

export default List;
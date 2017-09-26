import React from 'react';
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
      dialogId: 0,
    }
  }

  openDialog(data) {
    this.setState({
      dialogId: data.id,
    })
  }

  closeDialog() {
    this.setState({
      dialogId: 0,      
    })
  }

  render() {
    return (
      <div className="list">
        <ul>
          {
            this.list.map(function (v, k, arr) {
              return (
                <li key={v.id}>
                  <button onClick={this.openDialog.bind(this, v)}>
                    按钮
                </button>
                </li>
              )
            }, this)
          }
        </ul>
        {
          <Dialog id="id" isActive={this.state.dialogId} closeDialog={this.closeDialog.bind(this)} text={this.state.dialogId}>
            <h1 className="Dialog-title">
              Welcome
            </h1>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
          </Dialog>
        }
      </div>
    )
  }

}

export default List;
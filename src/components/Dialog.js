import React from 'react';

class Dialog extends React.Component {
  render() {
    return (
      <div className="dialog">
        <div className={this.props.isActive ? 'dia-msg active' : 'dia-msg'}>
          <p>{this.props.text}</p>
        </div>
        <div className={this.props.isActive ? 'tran-panel active' : 'tran-panel'} onClick={this.props.closeDialog}>
        </div>
      </div>
    )
  }
}

export default Dialog;
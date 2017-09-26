import React from 'react';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dialog">
        <div className={this.props.isActive ? 'dia-msg active' : 'dia-msg'}>
          <p>{this.props.text}</p>
          {this.props.children}
        </div>
        <div className={this.props.isActive ? 'tran-panel active' : 'tran-panel'} onClick={this.props.closeDialog}>
        </div>
      </div>
    )
  }
}

export default Dialog;
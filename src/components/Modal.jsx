import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = event => {
    if (event.key === 'Escape') {
      this.props.offModal('');
    }
  };

  closeBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.offModal('');
    }
  };

  render() {
    return (
      <div className="overlay" onClick={this.closeBackdrop}>
        <div className="modal">
          <img src={this.props.url} alt={this.props.tag} />
        </div>
      </div>
    );
  }
}

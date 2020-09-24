import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    state = { display: this.props.isOpen };

    open = () => {
        this.setState({
            display: true
        })
    };

    close = () => {
        this.setState({
            display: false
        })
    }

    render() {
        if (this.state.display) {
            console.log(this.props);
            return ReactDOM.createPortal(
                <div className="modal-wrapper">
                    <div onClick={this.close} className="modal-backdrop"></div>
                    <div className="modal-box">
                        {this.props.children}
                    </div>
                </div>
            , document.getElementById("root-modal"));
        } else {
            return null;
        }
    }
}

export default Modal;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    render() {
        if (this.props.isOpen) {
            return ReactDOM.createPortal(
                <div className="modal-wrapper">
                    <div onClick={this.props.close} className="modal-backdrop"></div>
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

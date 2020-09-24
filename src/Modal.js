import React, { Component } from 'react'

class Modal extends Component {
    state = { display: true };

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
            return (
                <div className="modal-wrapper">
                    <div onClick={this.close} className="modal-backdrop"></div>
                    <div className="modal-box">
                        {this.props.children}
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Modal;
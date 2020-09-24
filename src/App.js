import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
	state = {
		modalOpen: true
	}

	toggleModal = () => {
		this.setState({
			modalOpen: !this.state.modalOpen
		})
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.toggleModal}>Open Modal</button>
				<Modal isOpen={this.state.modalOpen} close={this.toggleModal}>
					<h1>Modal Header</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolor ab asperiores enim dolore omnis similique veritatis numquam, porro in deleniti voluptatum amet, deserunt eveniet sequi error eligendi dignissimos corporis?</p>
				</Modal>
			</div>
		);
	}
}

export default App;

import React from 'react';
import Modal from './Modal';

const openModal = () => {
	console.log("Open Modal");
}

function App() {
	return (
		<div className="App">
			<button onClick={openModal}>Open Modal</button>
			<Modal>
				<h1>Modal Header</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolor ab asperiores enim dolore omnis similique veritatis numquam, porro in deleniti voluptatum amet, deserunt eveniet sequi error eligendi dignissimos corporis?</p>
			</Modal>
		</div>
	);
}

export default App;

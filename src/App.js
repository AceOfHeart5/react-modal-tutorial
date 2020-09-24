import React from 'react';
import Modal from './Modal';

const openModal = () => {
	console.log("Open Modal");
}

function App() {
	return (
		<div className="App">
			<button onClick={openModal}>Open Modal</button>
			<Modal/>
		</div>
	);
}

export default App;

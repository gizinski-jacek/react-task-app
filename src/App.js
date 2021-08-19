import React, { useState } from 'react';
import Overview from './components/Overview';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [myArray, setMyArray] = useState([]);

	function handleChange(e) {
		setInputValue((prevState) => e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setMyArray((prevState) => [
			...prevState,
			{ title: inputValue, id: myArray.length },
		]);
		setInputValue((prevState) => '');
	}

	function handleDelete(e) {
		const id = Number(e.target.parentElement.id);
		setMyArray((prevState) =>
			prevState.filter((item) => {
				return item.id !== id;
			})
		);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Task title
					<input
						type='text'
						name='task'
						placeholder='Your task'
						onChange={handleChange}
						value={inputValue}
					/>
				</label>
				<button>Add Task</button>
			</form>
			<Overview
				data={myArray}
				handleDelete={handleDelete}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}

export default App;

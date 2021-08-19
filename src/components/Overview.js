import React from 'react';

function Overview(props) {
	const dataDisplay = props.data.map((item) => (
		<li key={item.id} id={item.id}>
			#{item.id + 1}. {item.title}
			<button onClick={props.handleDelete}>X</button>
		</li>
	));
	return <ul style={{ listStyleType: 'none' }}>{dataDisplay}</ul>;
}

export default Overview;

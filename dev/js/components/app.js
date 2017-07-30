import React from 'react';
import Player from '../containers/player';
import ModalItem from '../components/modal';


require('../../scss/style.scss')

const App = () => (
	<div>
		<h1>some task stuff</h1>
		<Player/>
		 <ModalItem/>
		
	</div>
);

export default App;
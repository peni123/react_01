import React from 'react';
import Player from '../containers/player';
import CommentItem from '../components/comment-input';
import User from '../containers/user';


require('../../scss/style.scss')

const App = () => (
	<div>
		<h1>some task stuff</h1>
		<Player/>
		<CommentItem/>
		<User/>
	</div>
);

export default App;
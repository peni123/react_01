import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Player extends Component {

	render() {
		return (
			<span>some test</span>
		);
	}
};

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps)(Player);
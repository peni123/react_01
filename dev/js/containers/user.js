import React, {Component} from 'react';
import ModalItem from '../components/modal';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class User extends Component {

showUserInfo () {
	return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                   
                >
                    {user.first} {user.last}
                </li>
            );
        });
}
	

	render() {
		return (
			<div>
				{this.showUserInfo()}
			</div> 
		);
	}
};

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps)(User);
import React, {Component} from 'react';



class User extends Component {

showUser () {
	
	return (
		<div className="user">
			<div className="user-pic">
				<img className="pic" src="./person_pic.png"></img>
			</div>
			<div className="user-name">
				<h3>Stoyan Daskaloff</h3>
				<div>{this.newDate=Date()}</div>
			</div>
		</div>
	);

}
	
	render() {
		return (
			<div>
				{this.showUser()}
			</div> 
		);
	}
};


export default User;
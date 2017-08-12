import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openPlayer} from '../actions/open-player';
import {closePlayer} from '../actions/close-player';
import {changeVideo} from '../actions/change-video';
import {addComment} from '../actions/comments';
import Modal  from 'react-bootstrap/lib/Modal';
import OverlayTrigger  from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import ModalBody  from 'react-bootstrap/lib/ModalBody';
import ModalTitle  from 'react-bootstrap/lib/ModalTitle';
import ModalFooter  from 'react-bootstrap/lib/ModalFooter';
import ModalHeader  from 'react-bootstrap/lib/ModalHeader';
import InputGroup  from 'react-bootstrap/lib/InputGroup';
import Video from '../components/video';
import User from '../components/user';
import {v4} from 'node-uuid';

let counter = 0;

class Player extends Component {

showPlayer () {
	
	return (
		<div className="player-wrapper">
			<h1>to watch a video paste the YouTube id below</h1>
			<Button onClick={()=>{this.props.openPlayer(true)}}>Play</Button>
			<InputGroup>
				<input ref={node=>{this.input=node}} placeholder="paste the YouTube id here"></input>
				<Button onClick={()=>{this.props.changeVideo(this.input.value);
				 this.input.value = ''; this.props.openPlayer(true)}}>
				 PLAY
				 </Button>
			</InputGroup>
			
			<div className="modal-item">
				<Modal className="modal" show={this.props.player.visibility}>
					<ModalHeader className="modal-close-btn" closeButton onClick={()=>{this.props.closePlayer(false)}}>
					</ModalHeader>
					<ModalBody className="modal-body">
						
						<Video/>
						<div className="btn-row">
							<div className="social-btn">
								<Button className="t-a-l">Like</Button>
								<Button className="t-a-l">Share</Button>
							</div>
							<div className="action-btn">
								<Button className="t-a-r">Edit</Button>
								<Button className="t-a-r">Delete</Button>
							</div>
						</div>
						<InputGroup className="comment">
							<input ref={node=>{this.input=node}} placeholder="...comment"></input>
							<Button onClick={()=>{this.props.addComment({text:this.input.value, id:counter++}); this.input.value = '';}}></Button>
						</InputGroup>
					</ModalBody>
					<ModalFooter className="modal-footer">
						
						<User></User>
						{<ul className="comments-list">
							{this.props.comments.map(comment => 
								<li key={v4()}>{comment.text}</li>
							)}
						</ul>}
					</ModalFooter>
				</Modal>
			</div>
		</div>
	);

}
	
	render() {
		return (
			<div>
				{this.showPlayer()}
			</div> 
		);
	}
};

function matchDispatchToProps(dispatch) {
	return bindActionCreators({openPlayer: openPlayer,
							   closePlayer: closePlayer,
							   changeVideo: changeVideo,
							   addComment: addComment,
							}, dispatch)
}

function mapStateToProps(state) {
    return {
        videos: state.videos,
		player: state.player,
		comments: state.comments
    };
};


export default connect(mapStateToProps, matchDispatchToProps)(Player);
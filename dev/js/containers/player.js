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
import {MdFavoriteBorder, MdFlag, MdShare, MdComment} from 'react-icons/lib/md';

class Player extends Component {

showPlayer () {
	
	return (
		<div className="player-wrapper">
			{/*<Button onClick={()=>{this.props.openPlayer(true)}}>Play</Button>*/}
			<InputGroup className="embed-input">
				<input ref={node=>{this.input=node}} placeholder="YouTube ID"></input>
				<Button onClick={()=>{this.props.changeVideo(this.input.value);
				 this.input.value = ''; this.props.openPlayer(true)}}>
				 EMBED
				 </Button>
			</InputGroup>
			{/*Embed Input END*/}
			<Modal className="modal" show={this.props.player.visibility}>
				<ModalHeader className="modal-close-btn" closeButton onClick={()=>{this.props.closePlayer(false)}}>
				</ModalHeader>
				{/*ModalHeader END*/}
				<ModalBody className="modal-body">
					<Video/>
				{/*Video END*/}
					<div className="btn-row">
						<div className="social-btn">
							<Button><MdFavoriteBorder className="icon"/><span>Like</span></Button>
							<Button><MdShare className="icon"/>Share</Button>
						</div>
						<div className="action-btn">
							<Button className="edit">Edit</Button>
							<Button className="del">Delete</Button>
						</div>
					</div>
				{/*Social buttons END*/}
					<InputGroup className="comment">
						<input ref={node=>{this.input=node}} placeholder="...comment"
						 onKeyDown={(e)=>{

							if(e.keyCode == 13 && e.shiftKey == false) {
								this.props.addComment({text:this.input.value, id:v4()});
								this.input.value = '';

							}
						}}>
						</input>
					</InputGroup>
				</ModalBody>
				{/*ModalBody END*/}
				<ModalFooter className="modal-footer">
					
					<User></User>
					{/*User END*/}
					<ul className="comments-list">
						{this.props.comments.map(comment => 
							<li key={v4()}>
								<div className="comment">{comment.text}</div>
								<div className="social-btn">
									<Button className="p-h-n"><MdFavoriteBorder className="icon"/><span>Like</span></Button>
									<Button className="p-h-n"><MdShare className="icon"/><span>Share</span></Button>
									<Button className="p-h-n"><MdComment className="icon"/><span>comment</span></Button>
							  </div>
							</li>
						)}
					</ul>
				{/*Comments END*/}
				</ModalFooter>
				{/*ModalFooter END*/}
			</Modal>
		{/*Modal END*/}
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
	return bindActionCreators({
		openPlayer: openPlayer,
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
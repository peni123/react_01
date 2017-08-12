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

let counter = 0;

class Player extends Component {

showPlayer () {
	
	return (
		<div className="player-wrapper">
			<Button onClick={()=>{this.props.openPlayer(true)}}></Button>
			
			<div className="modal-item">
				<Modal show={this.props.player.visibility}>
					<ModalHeader closeButton onClick={()=>{this.props.closePlayer(false)}}>
						<ModalTitle>Modal heading</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<h4>Paste here the link</h4>
						<InputGroup>
						<input ref={node=>{this.input=node}}></input>
						<Button onClick={()=>{this.props.changeVideo(this.input.value); this.input.value = '';}}></Button>
						<Video/>
						</InputGroup>
					</ModalBody>
					<ModalFooter>
						<h4>Comments Section</h4>
						<InputGroup>
						<input ref={node=>{this.input=node}}></input>
						<Button onClick={()=>{this.props.addComment({text:this.input.value, id:counter++}); this.input.value = '';}}></Button>
						</InputGroup>
						{<ul>
						{this.props.comments.map(comment => 
							<li key={comment.id}>{comment.text}</li>
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
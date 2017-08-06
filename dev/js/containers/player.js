import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openPlayer} from '../actions/open-player';
import {closePlayer} from '../actions/close-player';
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
						<input></input>
						<Video/>
						</InputGroup>
					</ModalBody>
					<ModalFooter>
						<p>Here shall be the comments</p>
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
	return bindActionCreators({openPlayer: openPlayer, closePlayer: closePlayer}, dispatch)
}

function mapStateToProps(state) {
    return {
        videos: state.videos,
		player: state.player
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(Player);